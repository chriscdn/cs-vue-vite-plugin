export type TSort = {
  sortKey: string | null;
  sortAsc: boolean;
  sortResolved?: string;
};

export type TPaginationLimitOffset = {
  offset: number;
  limit: number;
};
