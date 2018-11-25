import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    id: number;
    isEditMode = false;
    recipeForm: FormGroup;
    subscription: Subscription;
    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.isEditMode = params['id'] != null;
            this.initForm();
        });
    }

    private initForm() {
        let recipeName = '';
        let recipeImage = '';
        let recipeDescription = '';
        const ingredients = new FormArray([]);

        if (this.isEditMode) {
            const recipe = this.recipeService.getRecipe(this.id);

            recipeName = recipe.name;
            recipeImage = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (const ing of recipe.ingredients) {
                    ingredients.push(new FormGroup({
                        'name': new FormControl(ing.name, Validators.required),
                        'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }
        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImage, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
            'ingredients': ingredients
        });
    }

    getControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    onSubmit() {
        // const newRecipe = new Recipe(
        //     this.recipeForm.value['name'],
        //     this.recipeForm['description'],
        //     this.recipeForm['image'],
        //     this.recipeForm['ingredients']
        // );

        if (this.isEditMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        } else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    }

    onAddIng() {
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
            'name': new FormControl(null, Validators.required),
            'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    onDeleteIng(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
