<template>
  <div class="recipes-show">
    <h2>{{ recipe.title }}</h2>

    <img :src="recipe.image_url" :alt="recipe.title">

    <p>Chef: {{ recipe.chef }}</p>
    <p>Prep Time: {{ recipe.formatted.prep_time }}</p>

    <p>Ingredients:</p>
    <ul>
      <div v-for="ingredient in recipe.formatted.ingredients">
        <li>{{ ingredient }}</li>
      </div>
    </ul>

    <p>Directions:</p>
    <ol>
      <div v-for="direction in recipe.formatted.directions">
          <li>{{ direction }}</li>
      </div>
    </ol> 

    <router-link :to="'/recipes/' + recipe.id + '/edit'">
      <button>Update Recipe</button>
    </router-link> 

    <button v-on:click='destroyRecipe()'>Delete Recipe</button>
  </div>
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