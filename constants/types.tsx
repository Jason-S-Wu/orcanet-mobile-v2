export type User = {
  id: string;
  name: string;
  ip: string;
  port: number;
  price: number; // per MB
};

export type MarketFile = {
  fileHash: string;
  name: string;
  size: number; //in MB
};

export type Transaction = {
  id: string;
  note: string;
  status: string;
  date: string;
  amount: number;
};
