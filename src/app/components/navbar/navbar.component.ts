import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    @Output() listSelected = new EventEmitter<boolean>();
    @Output() recipeSelected = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    showList() {
        this.listSelected.emit(true);
        this.recipeSelected.emit(false);
    }

    showRecipes() {
        this.listSelected.emit(false);
        this.recipeSelected.emit(true);
    }

}
