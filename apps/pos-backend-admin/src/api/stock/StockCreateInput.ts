import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type StockCreateInput = {
  location?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
