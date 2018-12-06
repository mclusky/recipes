import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;
    constructor(private router: Router, private flash: FlashMessagesService) { }

    signupUser(email: string, password: string) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => console.log(err)
            );
    }

    signinUser(email: string, password: string) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token);
                this.flash.show('You are now logged in.', {
                    cssClass: 'alert-success text-center my-3',
                    timeout: 3000
                });
                this.router.navigate(['/']);
            })
            .catch(err => {
                this.flash.show(err.message, {
                    cssClass: 'alert-danger text-center my-3',
                    timeout: 4000
                });
            }
            );
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token);
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;

        this.router.navigate(['/login']);
    }
}
