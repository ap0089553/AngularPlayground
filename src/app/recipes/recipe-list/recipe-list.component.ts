import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dal Khichadi', 'Great Indian Mixture', 'https://asmallbite.com/wp-content/uploads/2018/05/Khichdi-Recipe-1.jpg'),
    new Recipe('Dosa', 'Great Indian Snack', 'https://recipes.timesofindia.com/thumb/54289752.cms?imgsize=495844&width=800&height=800')
  ];
  constructor() { }

  ngOnInit() {
  }

}
