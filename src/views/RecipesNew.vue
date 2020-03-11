<template>
  <div class="recipes-new">
    <div class="container">
      
      <h1>Create a New Recipe</h1>

      <ul>
        <li class="error" v-for="error in errors">
          {{ error }}
        </li>
      </ul>

      <form v-on:submit.prevent='submit()'>
        
        <div class="form-group">
          <label for="newRecipeTitle">Title</label>
          <input class="form-control" v-model="newRecipeTitle">
        </div>

        <div class="form-group">
          <label for="newRecipePrepTime">Prep Time</label>
          <input class="form-control" v-model="newRecipePrepTime">
        </div>

        <div class="form-group">
          <label for="newRecipeIngredients">Ingredients</label>
          <input class="form-control" v-model="newRecipeIngredients">
        </div>

        <div class="form-group">
          <label for="newRecipeDirections">Directions</label>
          <input class="form-control" v-model="newRecipeDirections">
        </div>

        <div class="form-group">
          <label for="newRecipeImageUrl">Image URL</label>
          <input class="form-control" v-model="newRecipeImageUrl">
        </div>
        
        <input class="btn btn-primary" type="submit" value='Create Recipe'>
      </form>

    </div> <!-- end .container -->
  </div> <!-- end .recipes-new -->
</template>

<style>
  
</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
              newRecipeTitle: '',
              newRecipePrepTime: '',
              newRecipeIngredients: '',
              newRecipeDirections: '',
              newRecipeImageUrl: '',
              errors: []
      };
    },
    created: function() {},
    methods: {
      submit: function() {
        console.log('create the recipe...');

        var params = {
                      title: this.newRecipeTitle,
                      prep_time: this.newRecipePrepTime,
                      ingredients: this.newRecipeIngredients,
                      directions: this.newRecipeDirections,
                      image_url: this.newRecipeImageUrl
                      };

        axios.post('/api/recipes', params).then(response => {
          this.$router.push('/');
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
      }
    }
  }
</script>