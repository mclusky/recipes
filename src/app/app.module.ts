import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditShoppingListComponent } from './components/edit-shopping-list/edit-shopping-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SingleRecipeComponent } from './components/recipes/recipes-list/single-recipe/single-recipe.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
    declarations: [
        AppComponent,
        ShoppingListComponent,
        NavbarComponent,
        EditShoppingListComponent,
        RecipesComponent,
        SingleRecipeComponent,
        RecipesListComponent,
        RecipeDetailComponent,
        DropdownDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
