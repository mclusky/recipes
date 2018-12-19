import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { shopppingListReducer } from './components/shopping-list/ngrx/shopping-list.reducers';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FlashMessagesModule.forRoot(),
        ShoppingListModule,
        AppRoutingModule,
        AuthModule,
        CoreModule,
        StoreModule.forRoot({ shoppingList: shopppingListReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
