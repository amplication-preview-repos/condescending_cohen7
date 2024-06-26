import { StockCreateNestedManyWithoutProductsInput } from "./StockCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  stocks?: StockCreateNestedManyWithoutProductsInput;
};
