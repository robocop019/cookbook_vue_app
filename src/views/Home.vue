<template>
  <div class="home">


    <h1>All Recipes</h1>

    <div v-for="recipe in recipes">
      <h3><router-link :to="'/recipes/' + recipe.id"> {{ recipe.title }} </router-link></h3>
      <img :src="recipe.image_url" :alt="recipe.title">

      <div v-if="currentRecipe === recipe">
        <p>Chef: {{ recipe.chef }}</p>
        <p>Prep Time: {{ recipe.formatted.prep_time }}</p>

        <p>Ingredients:</p>
        <div v-for="ingredient in recipe.formatted.ingredients">
          <ul>
            <li>{{ ingredient }}</li>
          </ul>
        </div>

        <p>Directions:</p>
        <ol>
          <div v-for="direction in recipe.formatted.directions">
              <li>{{ direction }}</li>
          </div>
        </ol>  

        <div>
          <h3>Update Recipe</h3>

          <div>
            Title: <input v-model='recipe.title'>
          </div>

          <div>
            directions: <input v-model='recipe.directions'>
          </div>

          <div>
            Ingredients: <input v-model='recipe.ingredients'>
          </div>

          <div>
            Image URL: <input v-model='recipe.image_url'>
          </div>

          <div>
            <button v-on:click='updateRecipe(recipe)'>Update Recipe</button>
          </div>
        </div>

        <div>
          <button v-on:click='destroyRecipe(recipe)'>Delete Recipe</button>
        </div>

      </div>
      
      <div>
        <button v-on:click='showRecipe(recipe)'>More Info</button>
      </div>

    </div>
  </div>
</template>

<style>
  img {
    max-width: 25%;
    max-height: 25%;
  }

  ul {
    list-style: none;
  }

  button {
    margin: 10px;
  }
</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        recipes: [],
        newRecipeTitle: '',
        newRecipeIngredients: '',
        newRecipeDirections: '',
        newRecipePrepTime: '',
        newRecipeImageUrl: '',
        currentRecipe: ''
      };
    },
    created: function() {
      axios.get('/api/recipes').then(response => {
        this.recipes = response.data;
        console.log(this.recipes);
      });
    },
    methods: {
      showRecipe: function(inputRecipe) {
        if(this.currentRecipe === inputRecipe) {
          this.currentRecipe = '';
        } else {
          this.currentRecipe = inputRecipe;
        }
      },

      updateRecipe: function(inputRecipe) {
        var params = {
                      title: inputRecipe.title,
                      prep_time: inputRecipe.prep_time,
                      ingredients: inputRecipe.ingredients,
                      directions: inputRecipe.directions,
                      image_url: inputRecipe.image_url
                      };

        console.log(params);

        axios.patch('/api/recipes/' + inputRecipe.id, params).then(response => {
          console.log('Success', response.data);
        });
      },

      destroyRecipe: function(inputRecipe) {
        axios.delete('/api/recipes/' + inputRecipe.id).then(response => {
          console.log('Success', response.data);
        });

        var index = this.recipes.indexOf(inputRecipe);
        console.log(index);

        this.recipes.splice(index, 1);
      }
    }
  };
</script>
