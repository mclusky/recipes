import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/ngrx/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
    selector: 'app-edit-shopping-list',
    templateUrl: './edit-shopping-list.component.html',
    styleUrls: ['./edit-shopping-list.component.sass']
})
export class EditShoppingListComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    editMode = false;
    editedItem: Ingredient;

    @ViewChild('form') shopForm: NgForm;
    constructor(private store: Store<fromApp.AppState>) {
    }

    ngOnInit() {
        this.subscription = this.store.select('shoppingList')
            .subscribe(data => {
                if (data.editedIngredientIndex > -1) {
                    this.editedItem = data.editedIngredient;
                    this.editMode = true;
                    this.shopForm.setValue({
                        name: this.editedItem.name,
                        amount: this.editedItem.amount
                    });
                } else {
                    this.editMode = false;
                }
            });
    }

    // addIng() {
    //     const newIngredient = new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
    //     this.shopService.addIngredient(newIngredient);
    // }

    onSubmit(form: NgForm) {
        const ing = new Ingredient(form.value.name, form.value.amount);
        if (this.editMode) {
            this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: ing }));
        } else {
            this.store.dispatch(new ShoppingListActions.AddIngredient(ing));
        }
        this.shopForm.reset();
        this.editMode = false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.store.dispatch(new ShoppingListActions.StopEdit());
    }

    onClear() {
        this.shopForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.store.dispatch(new ShoppingListActions.DeleteIngredient());
        this.onClear();
    }

}
