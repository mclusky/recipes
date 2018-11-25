import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { NgForm } from '@angular/forms';
import { ShopListService } from 'src/app/services/shop-list.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-edit-shopping-list',
    templateUrl: './edit-shopping-list.component.html',
    styleUrls: ['./edit-shopping-list.component.sass']
})
export class EditShoppingListComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    editMode = false;
    editeditemIndex: number;
    editedItem: Ingredient;
    @ViewChild('form') shopForm: NgForm;
    constructor(private shopService: ShopListService) {
    }

    ngOnInit() {
        this.subscription = this.shopService.startedEdit.subscribe((i: number) => {
            this.editMode = true;
            this.editeditemIndex = i;
            this.editedItem = this.shopService.getIngredient(i);
            this.shopForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
        });
    }

    // addIng() {
    //     const newIngredient = new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
    //     this.shopService.addIngredient(newIngredient);
    // }

    onSubmit(form: NgForm) {
        const ing = new Ingredient(form.value.name, form.value.amount);
        if (this.editMode) {
            this.shopService.updateIngredient(this.editeditemIndex, ing);
        } else {
            this.shopService.addIngredient(ing);
        }
        this.shopForm.reset();
        this.editMode = false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.editMode = false;
    }

    onClear() {
        this.shopForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shopService.deleteIngredient(this.editeditemIndex);
        this.onClear();
    }

}
