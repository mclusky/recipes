import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/models/ingredient';
import * as ShoppingListActions from '../../shopping-list/ngrx/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/ngrx/shopping-list.reducers';


@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
    singleRecipe: Recipe;
    id: number;
    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router,
        private store: Store<fromShoppingList.AppState>
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.singleRecipe = this.recipeService.getRecipe(this.id);
        });
    }

    onAddIng() {
        // Make a deep copy before dispatch//
        const ingToAdd = JSON.parse(JSON.stringify(this.singleRecipe.ingredients));
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingToAdd));
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }

}
