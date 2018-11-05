import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.sass']
})
export class RecipesListComponent implements OnInit {
    @Output() recipeToDisplay = new EventEmitter<Recipe>();
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    showRecipe(recipe: Recipe) {
        this.recipeToDisplay.emit(recipe);
    }

}
