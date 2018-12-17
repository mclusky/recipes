import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from 'src/app/models/ingredient';

const initialState = {
    ingredients: [
        new Ingredient('Pears', 4),
        new Ingredient('Chocolate', 250)
    ]
};

export function shopppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        default:
            return state;
    }
}
