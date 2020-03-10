<template>
  <div class="home">

    <h1>All Recipes</h1>

    <div v-for="recipe in recipes">
      <h3><router-link :to="'/recipes/' + recipe.id"> {{ recipe.title }} </router-link></h3>
      <img :src="recipe.image_url" :alt="recipe.title">

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
    methods: {}
  };
</script>
