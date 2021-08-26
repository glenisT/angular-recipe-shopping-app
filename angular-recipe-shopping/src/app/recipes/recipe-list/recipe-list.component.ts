import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe', 'Not a real recipe', 'https://media.istockphoto.com/vectors/recipe-book-vector-card-vector-id488269398')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
