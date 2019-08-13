import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-edit/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'my-first-app';
  featureSelected = 'receipe';
  onSelect(feature: string) {
    this.featureSelected = feature;
  }
}
