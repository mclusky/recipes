import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as authActions from '../auth/ngrx/auth.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router, private flash: FlashMessagesService, private store: Store<fromApp.AppState>) { }

    // signupUser(email: string, password: string) {
    //     firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(user => {
    //             this.store.dispatch(new authActions.Signup());
    //             firebase.auth().currentUser.getIdToken().then((token: string) => this.store.dispatch(new authActions.SetToken(token)));
    //         })
    //         .catch(err => console.log(err)
    //         );
    // }

    // signinUser(email: string, password: string) {
    //     firebase
    //         .auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then(() => {
    //             this.store.dispatch(new authActions.Login());
    //             firebase.auth().currentUser.getIdToken().then((token: string) => this.store.dispatch(new authActions.SetToken(token)));
    //             this.flash.show('You are now logged in.', {
    //                 cssClass: 'alert-success text-center my-3',
    //                 timeout: 3000
    //             });
    //             this.router.navigate(['/']);
    //         })
    //         .catch(err => {
    //             this.flash.show(err.message, {
    //                 cssClass: 'alert-danger text-center my-3',
    //                 timeout: 3000
    //             });
    //         }
    //         );
    // }

    // logout() {
    //     firebase.auth().signOut();
    //     this.store.dispatch(new authActions.Logout());

    //     this.router.navigate(['/login']);
    // }
}
