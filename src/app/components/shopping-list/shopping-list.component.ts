import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShopListService } from 'src/app/services/shop-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription: Subscription;
    constructor(private shopService: ShopListService) { }

    ngOnInit() {
        this.ingredients = this.shopService.getIngredients();
        this.subscription = this.shopService.ingredientChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onEdit(i: number) {
        this.shopService.startedEdit.next(i);

    }

}
