export type Artwork = {
  title: string;
  description: string;
  year: number;
  coverPhoto: {
    file: {
      fields: {
        url: string;
      }
    };
  }
}
