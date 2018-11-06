import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-single-recipe',
    templateUrl: './single-recipe.component.html',
    styleUrls: ['./single-recipe.component.sass']
})
export class SingleRecipeComponent implements OnInit {
    @Input() recipe: Recipe;
    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
    }

    recipeSelected() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }

}
