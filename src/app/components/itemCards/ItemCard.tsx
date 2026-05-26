"use client";

import Image from "next/image";

import {
  categoryIcons,
  mealIcons ,
} from "@/types/icons";

import type {
  FoodCategory,
  Mealtype,
} from "@/types/food";

type FoodCardProps = {
  image: string;
  name: string;
  price: number;
  category: FoodCategory;
  mealType: Mealtype;
};

export default function ItemCard({
  image,
  name,
  price,
  category,
  mealType,
}: FoodCardProps) {
  const CategoryIcon = categoryIcons[category];
  const MealIcon = mealIcons[mealType];

  return (
 <div className="overflow-hidden rounded-[28px] border border-orange-100 bg-orange-50 p-2 shadow-sm transition hover:shadow-md">
      {/* image */}
      <div className="relative h-44 overflow-hidden rounded-[22px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="mt-3 space-y-3 px-1">
        {/* name */}
        <h3 className="line-clamp-1 text-lg font-semibold text-neutral-900">
          {name}
        </h3>

        {/* price + category */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-neutral-900">
            ${price}
          </p>

          <div className="flex items-center gap-1 text-sm text-neutral-700">
            <CategoryIcon
              className={`size-4 ${
                category === "veg"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            />
            <span>{category}</span>
          </div>
        </div>

        {/* button */}
        <button className="w-full rounded-2xl bg-orange-300 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-orange-400">
          Add Now
        </button>
      </div>
    </div>
  );
}