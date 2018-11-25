import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
    }

}
