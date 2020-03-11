<template>
  <div class="recipes-index">
    <div class="container">

      <h1>All Recipes</h1>

      <div v-for="recipe in recipes">
        <h3><router-link :to="'/recipes/' + recipe.id"> {{ recipe.title }} </router-link></h3>
        <img :src="recipe.image_url" :alt="recipe.title">
      </div>
      
    </div> <!-- end of .container -->
  </div> <!-- end of .recipes-index -->
</template>

<style>
  
</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        recipes: []
      };
    },
    created: function() {
      axios.get('/api/recipes').then(response => {
        this.recipes = response.data;
      });
    },
    methods: {}
  };
</script>