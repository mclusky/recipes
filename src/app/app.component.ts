import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'recipes';
    displayList = false;
    displayRecipes = true;

    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBvcIovMWDX0dgEWwI4dQ08pzHKPkA8MC4',
            authDomain: 'recipes-5bc39.firebaseapp.com',
        });
    }
}
