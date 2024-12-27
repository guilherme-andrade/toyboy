import { Document } from '@contentful/rich-text-types';

export type Artwork = {
  title: string;
  description: Document;
  year: number;
  coverPhoto: {
    fields: {
      file: {
        url: string;
      }
    };
  }
}
