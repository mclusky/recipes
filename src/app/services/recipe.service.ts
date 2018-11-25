import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Pizza', 'great pizza', 'https://slice.seriouseats.com/assets_c/2013/09/20130926-crazy-pizza-cat-thumb-625xauto-354936.jpg',
            [
                new Ingredient('Tomatoes', 10),
                new Ingredient('Cheese', 300)
            ]),
        new Recipe(
            'Stuff', 'good for you', 'https://slice.seriouseats.com/assets_c/2013/09/20130926-crazy-pizza-cat-thumb-625xauto-354936.jpg',
            [
                new Ingredient('Butter', 200),
                new Ingredient('Chocolate', 150)
            ]),
    ];
    constructor() { }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    getRecipes() {
        return this.recipes.slice();
    }
}
