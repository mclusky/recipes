import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe';
import { Response } from '@angular/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    recipes: Recipe[];
    constructor(
        private httpService: HttpService,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    onSave() {
        this.httpService
            .save()
            .subscribe(
                (response: Response) => console.log(response.json()),
                (error) => console.log(error)
            );
    }

    onGet() {
        this.httpService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

}
