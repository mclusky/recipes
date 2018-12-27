import { Recipe } from 'src/app/models/recipe';
import { Ingredient } from '../../../models/ingredient';


export interface FeatureState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe(
            'Pizza', 'great pizza', 'https://slice.seriouseats.com/assets_c/2013/09/20130926-crazy-pizza-cat-thumb-625xauto-354936.jpg',
            [
                new Ingredient('Tomatoes', 10),
                new Ingredient('Cheese', 300)
            ]),
        new Recipe(
            'Stuff', 'good for you', 'https://slice.seriouseats.com/assets_c/2013/09/20130926-crazy-pizza-cat-thumb-625xauto-354936.jpg',
            [
                new Ingredient('Butter', 200),
                new Ingredient('Chocolate', 150)
            ]),
    ]
};

export function recipeReducer(state = initialState, action) {
    return state;
}
