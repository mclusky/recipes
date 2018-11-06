import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { FormsModule } from '@angular/forms';
import { ShopListService } from 'src/app/services/shop-list.service';
@Component({
    selector: 'app-edit-shopping-list',
    templateUrl: './edit-shopping-list.component.html',
    styleUrls: ['./edit-shopping-list.component.sass']
})
export class EditShoppingListComponent implements OnInit {
    @ViewChild('nameInput') ingName: ElementRef;
    @ViewChild('amountInput') ingAmount: ElementRef;
    constructor(private shopService: ShopListService) {
    }

    ngOnInit() {
    }

    addIng() {
        const newIngredient = new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
        this.shopService.addIngredient(newIngredient);
    }
}
