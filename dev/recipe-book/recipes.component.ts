import {Component} from 'angular2/core';
import {RecipeService} from "./recipe.service";
import {RecipeListComponent} from "./recipe-list.component";

@Component({
    selector: 'my-recipes',
    template: `
    <div class="master list">
       <my-recipe-list></my-recipe-list>
    </div>
    <div class="details">
        Recipe Details
    </div>
    `,
    providers: [RecipeService],
    directives: [RecipeListComponent]
})


export class RecipesComponent {

}