import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type StockUpdateInput = {
  location?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
