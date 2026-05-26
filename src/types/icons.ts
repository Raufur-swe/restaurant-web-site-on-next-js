import { LuBeef } from "react-icons/lu";
import { FoodCategory, Mealtype } from "./food";
import { GiMapleLeaf, GiOpenedFoodCan } from "react-icons/gi";
import { BsEggFried } from "react-icons/bs";
import { FaBowlRice } from "react-icons/fa6";

export const categoryIcons: Record<
  FoodCategory,
  React.ElementType
> = {
  "veg":GiMapleLeaf,
  "non-veg" :LuBeef
}
export const mealIcons: Record<
  Mealtype,
  React.ElementType
> = {
    breakfast: BsEggFried,
    lunch : FaBowlRice,
    dinner : GiOpenedFoodCan
}