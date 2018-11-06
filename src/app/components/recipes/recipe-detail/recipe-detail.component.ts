import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { ShopListService } from 'src/app/services/shop-list.service';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
    @Input() singleRecipe: Recipe;
    constructor(private shopService: ShopListService) { }

    ngOnInit() {
    }

    onAddIng() {
        this.singleRecipe.ingredients.map((ing: Ingredient) => {
            this.shopService.addIngredient(ing);
        });
    }

}
