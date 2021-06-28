import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A test Recipe', 
        'This is simply a test', 
        'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),

        new Recipe('Another test Recipe', 
        'This is simply a test',
         'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg',
         [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
         ])
    
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}