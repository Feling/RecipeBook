import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Recipe} from "../shared/recipe";

@Component({
    templateUrl: 'templates/recipes/recipe-detail.tpl.html'
})
export class RecipeDetailComponent implements OnInit {
    recipe:Recipe;

    ngOnInit():any {

    }

}