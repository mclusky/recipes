import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SingleRecipeComponent } from './recipes-list/single-recipe/single-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './ngrx/recipes.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './ngrx/recipes.effects';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
        StoreModule.forFeature('recipes', recipeReducer),
        EffectsModule.forFeature([RecipeEffects])
    ],
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        SingleRecipeComponent,
    ]
})
export class RecipesModule { }
