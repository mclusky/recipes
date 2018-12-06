import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { ShopListService } from 'src/app/services/shop-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
    singleRecipe: Recipe;
    id: number;
    constructor(
        private shopService: ShopListService,
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.singleRecipe = this.recipeService.getRecipe(this.id);
        });
    }

    onAddIng() {
        const ingToAdd = JSON.parse(JSON.stringify(this.singleRecipe.ingredients));
        this.shopService.addIngredient(ingToAdd);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }

}
