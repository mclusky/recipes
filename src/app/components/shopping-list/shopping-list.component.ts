import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Pears', 4), new Ingredient('Chocolate', 250)
    ];
    constructor() { }

    ngOnInit() {
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

}
