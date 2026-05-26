import { v4 as uuidv4 } from "uuid";
import { Food } from "@/types/food";

export const foods: Food[] = [
  {
    id: uuidv4(),
    name: "Chicken Burger",
    description: "Juicy chicken burger with cheese",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    category: "non-veg",
    mealtype: "lunch",
  
    available: true,
  },

  {
    id: uuidv4(),
    name: "Vegetable Pizza",
    description: "Loaded vegetable pizza with mozzarella",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    category: "veg",
    mealtype: "dinner",
    
    available: true,
  },

  {
    id: uuidv4(),
    name: "Chicken Fried Rice",
    description: "Chinese style chicken fried rice",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    category: "non-veg",
    mealtype: "lunch",
  
    available: true,
  },

  {
    id: uuidv4(),
    name: "Pancakes",
    description: "Soft pancakes with maple syrup",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    category: "veg",
    mealtype: "breakfast",

    available: true,
  },

  {
    id: uuidv4(),
    name: "Beef Steak",
    description: "Tender grilled beef steak",
    price: 700,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
    category: "non-veg",
    mealtype: "dinner",

    available: true,
  },

  {
    id: uuidv4(),
    name: "Veg Sandwich",
    description: "Healthy vegetable sandwich",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    category: "veg",
    mealtype: "breakfast",

    available: true,
  },

  {
    id: uuidv4(),
    name: "Chicken Chow Mein",
    description: "Chinese noodles with chicken",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
    category: "non-veg",
    mealtype: "dinner",

    available: true,
  },

  {
    id: uuidv4(),
    name: "Mushroom Soup",
    description: "Creamy mushroom soup",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
    category: "veg",
    mealtype: "dinner",

    available: true,
  },

  {
    id: uuidv4(),
    name: "Chicken Sandwich",
    description: "Toasted chicken sandwich",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f",
    category: "non-veg",
    mealtype: "breakfast",

    available: true,
  },

  {
    id: uuidv4(),
    name: "Vegetable Pasta",
    description: "Italian creamy vegetable pasta",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    category: "veg",
    mealtype: "lunch",

    available: true,
  },
];