export type Quote = {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
};

export type QuoteResponse = {
  docs: Quote[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};
