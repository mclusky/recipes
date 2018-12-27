import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Recipe } from 'src/app/models/recipe';
import { HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/ngrx/auth.reducers';
import * as AuthActions from '../../auth/ngrx/auth.actions';
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
        private httpService: HttpService,
        private store: Store<fromApp.AppState>
    ) { }

    ngOnInit() {
        this.authState = this.store.select('auth');
    }

    onSave() {
        this.httpService
            .save()
            .subscribe(
                (response: HttpEvent<Object>) => console.log(response),
                (error) => console.log(error)
            );
    }

    onGet() {
        this.httpService.getRecipes();
    }

    onLogout() {
        this.store.dispatch(new AuthActions.Logout());
    }
}
