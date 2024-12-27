"use client";
import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/app/layout";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { loadArtworkByTitle } from "@/content";
import type { Artwork } from "@/types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Link from "next/link";

const ArtworkPage = () => {
  const router = useRouter();
  const [artwork, setArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    async function loadArtwork() {
      if (router.isReady) {
        const title = router.query.title;
        const artwork = await loadArtworkByTitle(String(title));
        setArtwork(artwork);
      }
    }
    loadArtwork();
  }, [router.isReady]);

  if (!artwork) {
    return null;
  }

  return (
    <div className="p-8 pb-24 bg-white">
      <Navbar />
      <div className="flex items-center mb-6 text-4xl">
        <Link href="/">←</Link>
        <span className="mx-4 block">·</span>
        <h1 className="font-[1000] leading-1">{artwork?.title}</h1>
        <span className="mx-4 block">·</span>
        <span className="leading-1 block">{artwork?.year}</span>
      </div>
      <div
        className="font-light text-2xl mt-4 mb-8"
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(artwork.description),
        }}
      />
      <Image
        className="relative object-cover h-full w-full"
        src={String(
          artwork.coverPhoto.fields.file.url.replace("//", "https://")
        )}
        alt={String(artwork.title)}
        width="2000"
        height="2000"
      />
    </div>
  );
};

ArtworkPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ArtworkPage;
