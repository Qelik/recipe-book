import { Ingredient } from "../../shared/ingredient.model";
import * as ShopppingListActions from "./shopping-list.actions";

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
};

export function shoppingListReducer(state = initialState, action: ShopppingListActions.AddIngredient) {
    switch(action.type){
        case ShopppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
    }
};