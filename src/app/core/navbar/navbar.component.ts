import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/ngrx/auth.reducers';
import * as AuthActions from '../../auth/ngrx/auth.actions';
import * as RecipeActions from '../../components/recipes/ngrx/recipes.actions';
import * as fromRecipe from '../../components/recipes/ngrx/recipes.reducers';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    recipes: Recipe[];
    authState: Observable<fromAuth.State>;
    constructor(
        private store: Store<fromRecipe.State>
    ) { }

    ngOnInit() {
        this.authState = this.store.select('auth');
    }

    onSave() {
        this.store.dispatch(new RecipeActions.SaveRecipe());
    }

    onGet() {
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }

    onLogout() {
        this.store.dispatch(new AuthActions.Logout());
    }
}
