import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
    finalRecipe: Recipe;
    constructor() { }

    ngOnInit() {
    }

}
