<template>
  <div class="recipes-edit">
    <div class="container">
      
      <h2>Edit Recipe</h2>

      <ul>
        <li class="error" v-for="error in errors">
          {{ error }}
        </li>
      </ul>

      <form v-on:submit.prevent='submit()'>
        <div class="form-group">
          <label for="title">Title</label>
          <input class="form-control" v-model="recipe.title">
        </div>

        <div class="form-group">
          <label for="prep_time">Prep Time</label>
          <input class="form-control" v-model="recipe.prep_time">
        </div>

        <div class="form-group">
          <label for="ingredients">Ingredients</label>
          <input class="form-control" v-model="recipe.ingredients">
        </div>

        <div class="form-group">
          <label for="directions">Directions</label>
          <input class="form-control" v-model="recipe.directions">
        </div>

        <div class="form-group">
          <label for="image_url">Image URL</label>
          <input class="form-control" v-model="recipe.image_url">
        </div>
        
        <input class="btn btn-primary" type="submit" value='Update Recipe'>
      </form>

    </div> <!-- end .container -->
  </div> <!-- end .recipes-edit -->
</template>

<style></style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
              recipe: {
                      id: '',
                      title: '',
                      prep_time: '',
                      directions: '',
                      ingredients: '',
                      chef: '',
                      formatted: {
                                  prep_time: '',
                                  ingredients: [],
                                  directions:  [],
                                  created_at: ''
                                  }
                      },
              errors: []
      };
    },
    created: function() {
      axios.get('/api/recipes/' + this.$route.params.id).then(response => {
        this.recipe = response.data;
      });
    },
    methods: {
      submit: function() {
        var params = {
                      title: this.recipe.title,
                      prep_time: this.recipe.prep_time,
                      ingredients: this.recipe.ingredients,
                      directions: this.recipe.directions,
                      image_url: this.recipe.image_url
                      };


        axios.patch('/api/recipes/' + this.recipe.id, params).then(response => {
          console.log('Success', response.data);
          this.$router.push('/recipes/' + this.recipe.id);
        });
      }
    }
  };
</script>