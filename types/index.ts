export type Artwork = {
  title: string;
  description: string;
  year: number;
  coverPhoto: {
    fields: {
      file: {
        url: string;
      }
    };
  }
}
