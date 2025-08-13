import type { ICategoryData } from "./category.types";

export interface IImage {
    path:string;
    public_id:string
}
export interface IProductData {
    _id:string,
    name:string,
    description:string,
    createdAt:string;
    updatedAt:string;
    coverImage:IImage;
    images?:IImage[];
    price:number;
    category:ICategoryData;
    stock:number
}