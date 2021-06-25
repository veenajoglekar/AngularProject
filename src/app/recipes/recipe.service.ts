import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 
        'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg'),
        new Recipe('Another test Recipe', 'This is simply a test',
         'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg')
    
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}