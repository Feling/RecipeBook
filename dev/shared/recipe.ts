import {Ingredient} from "./ingredient";
export class Recipe {
    name:string;
    content:string;
    imageUrl:string;
    ingredient:Ingredient[];

    constructor(name:string, content:string, imageUrl:string, ingredients:Ingredient[]) {
        this.name = name;
        this.content = content;
        this.imageUrl = imageUrl;
        this.ingredient = ingredients;
    }
}