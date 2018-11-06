import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable({
    providedIn: 'root'
})
export class ShopListService implements OnInit {
    ingredientAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Pears', 4),
        new Ingredient('Chocolate', 250)
    ];
    constructor() { }

    ngOnInit() {
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.map((ing, i) => {
            if (ing.name.toLowerCase() === ingredient.name.toLowerCase()) {
                this.ingredients[i].amount += ingredient.amount;
            }
        });
        if (!this.ingredients.find(ing => ing.name.toLowerCase() === ingredient.name.toLowerCase())) {
            this.ingredients.push(ingredient);
        }
        this.ingredientAdded.emit(this.ingredients.slice());
    }
}

