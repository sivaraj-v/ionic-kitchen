import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Chilly Chicken',
      imageUrl: 'https://i.ytimg.com/vi/V-t87u7eNfQ/maxresdefault.jpg',
      ingredients: ['XXX', 'YYYY', 'ZZZ']
    },
    {
      id: 'r2',
      title: 'Egg roast',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KIELWLahaKLQUveWVljn6KPDN9T0IFQsaSBBYutDY22nmasm',
      ingredients: ['RRR', 'TTT', 'CCC']
    }
  ];
  constructor() {}

  getAllReceipes() {
    return [...this.recipes];
  }
  getReceipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      })
    };
  }
  deleteReceipe(recipeId: string) {
    const afterDeleting = this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    return afterDeleting;
  }
}
