import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe', 'Not a real recipe.', 'https://media.istockphoto.com/vectors/recipe-book-vector-card-vector-id488269398'),
    new Recipe('Chicken Fingers', 'I like chimkend.', 'https://www.uppercrustent.com/uce-content/uploads/2013/11/Panko-Chicken-Fingers.jpg'),
    new Recipe('Medium Rare Steak', 'Beef good.', 'https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446.jpg'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
