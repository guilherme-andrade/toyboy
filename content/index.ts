"use client";
import { createClient } from 'contentful';
import type { Artwork } from '@/types';

console.log(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);

export const client = createClient({
  space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
  accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN),
});

export const loadArtwork = async ({ perPage, page }: { perPage?: number, page: number }) => {
  const pageSize = perPage || 10;
  const limit = page * pageSize;
  const skip = limit - pageSize;
  const entries = await client.getEntries({ content_type: 'artwork', skip, limit });
  return { items: entries.items.map((entry) => entry.fields as Artwork), total: entries.total };
};

export const loadArtworkByTitle = async (title: string) => {
  const entry = await client.getEntries({ content_type: 'artwork', 'fields.title': title });
  return entry.items[0].fields as Artwork;
};
