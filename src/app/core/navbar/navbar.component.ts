import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Recipe } from 'src/app/models/recipe';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEvent } from '@angular/common/http';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    recipes: Recipe[];
    constructor(
        private httpService: HttpService,
        private authService: AuthService
    ) { }

    ngOnInit() {
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
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

}
