"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types";

interface Props {
  artwork: Artwork;
  className?: string;
}

const Artwork: FC<Props> = ({ artwork, className }) => {
  return (
    <article
      className={`group overflow-hidden relative w-full h-[700px] motion-opacity-in-0 motion-duration-[4000ms] motion-ease-spring-snappy ${className}`}
    >
      <Image
        className="relative object-cover h-full w-full"
        src={String(
          artwork.coverPhoto.fields.file.url.replace("//", "https://")
        )}
        alt={String(artwork.title)}
        width="2000"
        height="2000"
      />
      <Link
        href={`/artwork/${artwork.title}`}
        className="text-black text-4xl ml-4 absolute bottom-0 left-0 h-full w-full z-20"
      />
      <div className="absolute bottom-0 left-0 h-fit w-full bg-white translate-y-full group-hover:translate-y-0 transition-transform flex justify-between">
        <div className="text-black text-4xl h-fit w-auto flex items-center pt-4">
          {/* translate-x-[100%] group-hover:-motion-translate-x-loop-[200%]/reset motion-duration-[15000ms] motion-ease-linear */}
          <h2 className="text-nowrap font-bold">{artwork.title}</h2>
          <span className="mx-4">·</span>
          <h2 className="text-nowrap font-light">{artwork.year}</h2>
          <span className="text-nowrap font-light ml-4">→</span>
        </div>
      </div>
    </article>
  );
};

export default Artwork;
