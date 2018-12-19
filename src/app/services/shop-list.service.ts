import { Injectable, OnInit } from '@angular/core';
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

    // getIngredients() {
    //     return this.ingredients.slice();
    // }

    // addSingleIngredient(ing: Ingredient) {
    //     this.isIngredientPresent(ing);
    //     this.ingredientChanged.next(this.ingredients.slice());
    // }

    // addIngredient(ingredients: Ingredient[]) {
    //     ingredients.map(ing => {
    //         this.isIngredientPresent(ing);
    //     });
    //     this.ingredientChanged.next(this.ingredients.slice());
    // }

    // isIngredientPresent(ing) {
    //     const index = this.ingredients.findIndex(item => item.name.toLowerCase() === ing.name.toLowerCase());
    //     index === - 1 ? this.ingredients.push(ing) : this.ingredients[index].amount += ing.amount;
    // }

    // getIngredient(i: number) {
    //     return this.ingredients[i];
    // }

    // updateIngredient(i: number, ing: Ingredient) {
    //     this.ingredients[i] = ing;
    //     this.ingredientChanged.next(this.ingredients.slice());
    // }

    // deleteIngredient(i: number) {
    //     this.ingredients.splice(i, 1);
    //     this.ingredientChanged.next(this.ingredients.slice());
    // }
}

