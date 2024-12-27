"use client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ArtworkCard from "@/components/Artwork";
import { loadArtwork } from "@/content";
import type { Artwork } from "@/types";

const delays = {
  0: "motion-delay-0",
  1: "motion-delay-[400ms]",
  2: "motion-delay-[600ms]",
  3: "motion-delay-[800ms]",
  4: "motion-delay-[1000ms]",
  5: "motion-delay-[1200ms]",
  6: "motion-delay-[1400ms]",
};

const PAGE_SIZE = 4;

const ArtworkScrollable = () => {
  const [artwork, setArtwork] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalReached = total === artwork.length;

  useEffect(() => {
    const run = async () => {
      const { items, total } = await loadArtwork({ page, perPage: PAGE_SIZE });
      setTotal(total);
      if (total === artwork.length) {
        return;
      }
      setArtwork((prev) => [...prev, ...items]);
    };
    run();
  }, [page]);

  if (!artwork) {
    return <div>Loading...</div>;
  }

  const fetchData = async () => {
    if (totalReached) {
      return;
    }
    setPage(page + 1);
  };

  const getDelayClass = (index: number) => {
    return delays[index % PAGE_SIZE];
  };

  return (
    <InfiniteScroll
      dataLength={artwork.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      scrollThreshold={1}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
    >
      {artwork.map((artwork, index) => (
        <ArtworkCard
          key={index}
          artwork={artwork}
          className={getDelayClass(index)}
        />
      ))}
    </InfiniteScroll>
  );
};

export default ArtworkScrollable;
