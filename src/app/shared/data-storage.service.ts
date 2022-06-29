import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";

import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: 'root' })

export class DataStorageService {
    private static readonly baseUrl = 'https://angular-recipe-buk-default-rtdb.europe-west1.firebasedatabase.app';

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.Recipes;
        this.http.put<Recipe[]>(`${DataStorageService.baseUrl}/recipes.json`, recipes).subscribe((response) => console.log(response));
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(`${DataStorageService.baseUrl}/recipes.json`).pipe(map((recipes) => {
            return recipes.map((recipe) => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            });
        }),
            tap((recipes) => (this.recipeService.Recipes = recipes))
        );
    }
}