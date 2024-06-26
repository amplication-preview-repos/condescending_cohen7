import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StockWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
};
