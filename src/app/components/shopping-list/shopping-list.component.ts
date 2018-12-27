import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './ngrx/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
    shoppingListState: Observable<{ ingredients: Ingredient[] }>;
    constructor(private store: Store<fromApp.AppState>) { }

    ngOnInit() {
        this.shoppingListState = this.store.select('shoppingList');
        // this.subscription = this.shopService.ingredientChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    }

    onEdit(i: number) {
        this.store.dispatch(new ShoppingListActions.StartEdit(i));
    }

}
