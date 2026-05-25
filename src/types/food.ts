export type FoodCategory = "veg" | "non-veg"
export type Mealtype = "breakfast" | "lunch" | "dinner"

export interface Food {
    id : string,
    image : string
    name : string,
    description : string ,
    category : FoodCategory ,
    mealtype : Mealtype ,
    price : number,
    available : boolean
}