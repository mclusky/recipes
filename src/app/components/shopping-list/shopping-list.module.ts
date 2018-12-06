import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { EditShoppingListComponent } from '../edit-shopping-list/edit-shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        FormsModule
    ],
    declarations: [
        ShoppingListComponent,
        EditShoppingListComponent
    ]
})
export class ShoppingListModule { }
