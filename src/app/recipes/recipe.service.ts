import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shopping-list/shared/ingredient.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Dal Khichadi',
            'Great Indian Mixture',
            'https://asmallbite.com/wp-content/uploads/2018/05/Khichdi-Recipe-1.jpg',
            [new Ingredient('Rice', 1), new Ingredient('Dal', 1), new Ingredient('Masala', 2)]),
        new Recipe('Dosa',
            'Great Indian Snack',
            'https://recipes.timesofindia.com/thumb/54289752.cms?imgsize=495844&width=800&height=800',
            [new Ingredient('Batter', 1), new Ingredient('Potato', 5), new Ingredient('Sambhar', 2)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
