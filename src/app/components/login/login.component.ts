import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../auth/ngrx/auth.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

    constructor(private store: Store<fromApp.AppState>) { }

    ngOnInit() {
    }

    onSignin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.store.dispatch(new AuthActions.TryLogin({ username: email, password: password }));
    }

}
