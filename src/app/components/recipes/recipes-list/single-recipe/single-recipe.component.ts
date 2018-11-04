import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
    selector: 'app-single-recipe',
    templateUrl: './single-recipe.component.html',
    styleUrls: ['./single-recipe.component.sass']
})
export class SingleRecipeComponent implements OnInit {
    @Input() recipe: Recipe;
    @Output() recipeToShow = new EventEmitter<void>();
    constructor() { }

    ngOnInit() {
    }

    recipeSelected() {
        this.recipeToShow.emit();
    }

}
