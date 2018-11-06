import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShopListService } from 'src/app/services/shop-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];
    constructor(private shopService: ShopListService) { }

    ngOnInit() {
        this.ingredients = this.shopService.getIngredients();
        this.shopService.ingredientAdded.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    }


}
