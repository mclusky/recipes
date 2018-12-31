import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RecipeActions from '../ngrx/recipes.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from 'src/app/models/recipe';
import { Injectable } from '@angular/core';
import * as fromRecipe from '../ngrx/recipes.reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .pipe(ofType(RecipeActions.FETCH_RECIPES))
        .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
            return this.http
                .get<Recipe[]>(`https://recipes-5bc39.firebaseio.com/Recipes.json`, {
                    observe: 'body',
                    responseType: 'json',
                    // params: new HttpParams().set('auth', token)
                });
        }))
        .pipe(map(
            (recipes) => {
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };
            }));

    @Effect({ dispatch: false })
    recipeSave = this.actions$
        .pipe(ofType(RecipeActions.SAVE_RECIPE))
        .pipe(withLatestFrom(this.store.select('recipes')))
        .pipe(switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', 'https://recipes-5bc39.firebaseio.com/Recipes.json', state.recipes, {
                reportProgress: true,
            });
            return this.http.request(req);
        }));

    constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromRecipe.FeatureState>) { }
}
