import { StringFilter } from "../../util/StringFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  stocks?: StockListRelationFilter;
};
