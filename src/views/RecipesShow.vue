<template>
  <div class="recipes-show">
    <div class="container">
  
      <div class="card" >

        <img :src="recipe.image_url" class="card-img-top" :alt="recipe.title">

        <div class="card-body">
          <h3 class="card-title">{{ recipe.title }}</h3>
          <p class="card-text">Chef: {{ recipe.chef }}</p>
          <p class="card-text">Prep Time: {{ recipe.formatted.prep_time }}</p>
        </div>
  
        <h5>Ingredients:</h5>
        <ul class="list-group list-group-flush">
          <div v-for="ingredient in recipe.formatted.ingredients">
            <li class="list-group-item">{{ ingredient }}</li>
          </div>
        </ul>

        <h5 class='mt-5'>Directions:</h5>
        <ol class="list-group list-group-flush">
          <div v-for="direction in recipe.formatted.directions">
            <li class="list-group-item">{{ direction }}</li>
          </div>
        </ol>

        <div class="card-body">
          <router-link :to="'/recipes/' + recipe.id + '/edit'">
            <button type="button" class="btn btn-info">Update Recipe</button>
          </router-link>
          <button v-on:click='destroyRecipe()' type="button" class="btn btn-danger">Delete Recipe</button>
        </div>

      </div> <!-- end .card -->

    </div> <!-- end of .container -->
  </div> <!-- end of .recipes-show -->
</template>

<style>

</style>


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
                      }
      };
    },
    created: function() {
      axios.get('/api/recipes/' + this.$route.params.id).then(response => {
        this.recipe = response.data;
      });
    },
    methods: {
      destroyRecipe: function() {
        axios.delete('/api/recipes/' + this.recipe.id).then(response => {
          this.$router.push('/');
        });
      }
    }
  };
</script>