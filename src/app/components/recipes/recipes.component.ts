import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
    finalRecipe: Recipe;
    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.finalRecipe = recipe);
    }

}
