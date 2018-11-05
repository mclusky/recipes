import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Pizza', 'great pizza', 'https://slice.seriouseats.com/assets_c/2013/09/20130926-crazy-pizza-cat-thumb-625xauto-354936.jpg'),
        new Recipe(
            'Stuff', 'good for you', 'https://slice.seriouseats.com/assets_c/2013/09/20130926-crazy-pizza-cat-thumb-625xauto-354936.jpg'),
    ];
    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }
}
