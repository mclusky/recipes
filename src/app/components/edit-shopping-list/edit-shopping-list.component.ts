import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-edit-shopping-list',
    templateUrl: './edit-shopping-list.component.html',
    styleUrls: ['./edit-shopping-list.component.sass']
})
export class EditShoppingListComponent implements OnInit {
    @ViewChild('nameInput') ingName: ElementRef;
    @ViewChild('amountInput') ingAmount: ElementRef;
    @Output() newItem = new EventEmitter<Ingredient>();
    constructor() {
    }

    ngOnInit() {
    }

    addIng() {
        const newIngredient = new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
        this.newItem.emit(newIngredient);
    }

}
