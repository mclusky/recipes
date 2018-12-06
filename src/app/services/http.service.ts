import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    save() {
        const token = this.authService.getToken();
        return this.http.put(`https://recipes-5bc39.firebaseio.com/Recipes.json?auth=${token}`, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.http
            .get(`https://recipes-5bc39.firebaseio.com/Recipes.json?auth=${token}`)
            .pipe(map(
                (response: Response) => {
                    const recipes = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }))
            .subscribe(
                (response) => this.recipeService.setRecipes(response)
            );
    }
}
