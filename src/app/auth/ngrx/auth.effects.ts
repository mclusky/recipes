import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

export interface User {
    username: string;
    password: string;
}

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .pipe(ofType(AuthActions.TRY_SIGNUP))
        .pipe(map((action: AuthActions.TrySignup) => {
            return action.payload;
        }))
        .pipe(switchMap((authData: User) => {
            return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }))
        .pipe(switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }))
        .pipe(mergeMap((token: string) => {
            return [{
                type: AuthActions.SIGNUP
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
            ];
        }));

    @Effect()
    authLogin = this.actions$
        .pipe(ofType(AuthActions.TRY_LOGIN))
        .pipe(map((action: AuthActions.TryLogin) => action.payload))
        .pipe(switchMap((authData: User) => {
            return from(firebase
                .auth()
                .signInWithEmailAndPassword(authData.username, authData.password));
        }))
        .pipe(switchMap(() => from(firebase.auth().currentUser.getIdToken())))
        .pipe(mergeMap((token: string) => {
            this.flash.show('You are now logged in.', {
                cssClass: 'alert-success text-center my-3',
                timeout: 3000
            });
            this.router.navigate(['/']);
            return [{
                type: AuthActions.LOGIN
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
            ];
        }));

    @Effect({ dispatch: false })
    authLogout = this.actions$
        .pipe(ofType(AuthActions.LOGOUT))
        .pipe(tap(() => this.router.navigate(['/'])));

    constructor(
        private actions$: Actions,
        private router: Router,
        private flash: FlashMessagesService) { }
}

