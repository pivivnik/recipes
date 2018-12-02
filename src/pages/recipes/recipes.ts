import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { Recipe } from '../../models/recipe';
import { RecipesService } from '../../services/recipes'
import { RecipePage } from '../recipe/recipe';
import { Ingredient } from '../../models/ingredient';
import { ShoppingListService } from '../../services/shopping-list';


@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[]; 
  ingredients: Ingredient[]
  

  constructor(private navCtrl: NavController, private recipesService: RecipesService) {}
  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'New'})
  }

  onLoadRecipe(recipe: Recipe, index: number)  {
    this.navCtrl.push(RecipePage, {recipe: recipe, index: index})
  }



}
