import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shopping-list/shared/ingredient.model';
import { ShoppingListService } from './shopping-edit/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {
    this.ingredients = slService.getIngredients();
   }

  ngOnInit() {
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
