import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Recipe } from '../models/recipe';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    save() {
        // const token = this.authService.getToken();
        // return this.http.put(`https://recipes-5bc39.firebaseio.com/Recipes.json`, this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     // headers: new HttpHeaders().set('Authorization', '')
        //     params: new HttpParams().set('auth', token)
        // });
        const req = new HttpRequest('PUT', 'https://recipes-5bc39.firebaseio.com/Recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true,
        });
        return this.http.request(req);
    }

    getRecipes() {
        // const token = this.authService.getToken();
        // return this.http
        //     .get<Recipe[]>(`https://recipes-5bc39.firebaseio.com/Recipes.json?auth=${token}`)
        return this.http
            .get<Recipe[]>(`https://recipes-5bc39.firebaseio.com/Recipes.json`, {
                observe: 'body',
                responseType: 'json',
                // params: new HttpParams().set('auth', token)
            })
            .pipe(map(
                (recipes) => {
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
