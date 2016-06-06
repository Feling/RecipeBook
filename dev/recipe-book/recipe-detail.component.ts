import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RouteParams} from "angular2/router";
import {RecipeService} from "./recipe.service";
import {Router} from "angular2/router";

@Component({
    templateUrl: 'templates/recipes/recipe-detail.tpl.html'
})
export class RecipeDetailComponent implements OnInit {
    recipe:Recipe;
    private _recipeIndex:string;

    constructor(private _routerParams:RouteParams, private _recipeService:RecipeService,
                private _router:Router) {
    }

    onEdit() {
        this._router.navigate(['RecipeEdit', {
            editMode: 'edit', itemIndex: this._recipeIndex
        }]);
    }

    ngOnInit():any {
        let itemIndex = this._routerParams.get('recipeIndex');
        this._recipeIndex = itemIndex;
        this.recipe = this._recipeService.getRecipe(+itemIndex) || null;
    }

}