import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.sass']
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            'Pizza', 'great pizza', 'https://slice.seriouseats.com/assets_c/2013/09/20130926-crazy-pizza-cat-thumb-625xauto-354936.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

}
