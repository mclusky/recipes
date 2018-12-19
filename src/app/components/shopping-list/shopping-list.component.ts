import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShopListService } from 'src/app/services/shop-list.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './ngrx/shopping-list.reducers';
import * as ShoppingListActions from './ngrx/shopping-list.actions';


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
    shoppingListState: Observable<{ ingredients: Ingredient[] }>;
    constructor(private shopService: ShopListService, private store: Store<fromShoppingList.AppState>) { }

    ngOnInit() {
        this.shoppingListState = this.store.select('shoppingList');
        // this.subscription = this.shopService.ingredientChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    }

    onEdit(i: number) {
        this.store.dispatch(new ShoppingListActions.StartEdit(i));
    }

}
