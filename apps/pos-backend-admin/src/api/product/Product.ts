import { Stock } from "../stock/Stock";

export type Product = {
  createdAt: Date;
  id: string;
  stocks?: Array<Stock>;
  updatedAt: Date;
};
