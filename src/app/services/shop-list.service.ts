import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShopListService implements OnInit {
    startedEdit = new Subject<number>();
    ingredientChanged = new Subject<Ingredient[]>();
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
        this.ingredientChanged.next(this.ingredients.slice());
    }

    getIngredient(i: number) {
        return this.ingredients[i];
    }

    updateIngredient(i: number, ing: Ingredient) {
        this.ingredients[i] = ing;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(i: number) {
        this.ingredients.splice(i, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}

