import Image from "next/image";
import burger from "@/assets/burgerposter.jpg";
import momo from "@/assets/momoposter.jpg";
import pizza from "@/assets/pizzaposter.jpg";
import chicken from "@/assets/legposter.jpg";

import { Food } from "@/types/food";
import { v4 as uuidv4 } from "uuid";

// data
export const topChart: Pick<Food, "id" | "name" | "image">[] = [
  {
    id: uuidv4(),
    name: "Pizza",
    image: pizza.src,
  },
  {
    id: uuidv4(),
    name: "Burger",
    image: burger.src,
  },
  {
    id: uuidv4(),
    name: "Momos",
    image: momo.src,
  },
  {
    id: uuidv4(),
    name: "Chicken",
    image: chicken.src,
  },
];

// props type
type FoodCardProps = {
  name: string;
  image: string;
};

// card component
const FoodCard = ({ name, image }: FoodCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between bg-secondary p-4">
        <h2 className="text-lg font-semibold">{name}</h2>

        <button className="rounded-full bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600">
          Order
        </button>
      </div>
    </div>
  );
};

export default FoodCard;