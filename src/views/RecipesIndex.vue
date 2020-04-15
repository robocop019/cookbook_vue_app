<template>
  <div class="recipes-index">
    <div class="container">

      <h1>All Recipes</h1>

      <div>
        <button class='btn btn-info text-info bg-dark m-3' v-on:click="setSortAttribute('title')">
          Sort by Title <span v-if="sortAttribute === 'title'">{{sortArrow}}</span>
        </button>

        <button class='btn btn-info text-info bg-dark m-3' v-on:click="setSortAttribute('prep_time')">
          Sort by Prep Time <span v-if="sortAttribute === 'prep_time'">{{sortArrow}}</span>
        </button>
      </div>

      <div v-for="recipe in orderBy(filterBy(recipes, $parent.titleFilter, 'title'), sortAttribute, sortAscending)">
        <h3><router-link :to="'/recipes/' + recipe.id"> {{ recipe.title }} </router-link></h3>
        <img :src="recipe.image_url" :alt="recipe.title">
      </div>
      
    </div> <!-- end of .container -->
  </div> <!-- end of .recipes-index -->
</template>

<style>
  
</style>

<script>
  import Vue2Filters from 'vue2-filters';
  var axios = require('axios');

  export default {
    data: function() {
      return {
        recipes: [],
        sortAttribute: 'title',
        sortAscending: 1,
        sortArrow: '⬆️'
      };
    },
    created: function() {
      axios.get('/api/recipes').then(response => {
        this.recipes = response.data;
      });
    },
    methods: {
      setSortAttribute: function(inputAttribute) {

        if (this.sortAttribute === inputAttribute) {
          this.sortAscending *= -1;
          if (this.sortArrow === '⬆️') {
            this.sortArrow = '⬇️';
          } else {
            this.sortArrow = '⬆️';
          }
        } else {
          this.sortAscending = 1;
          this.sortArrow = '⬆️';
        }

        this.sortAttribute = inputAttribute;
      }
    },
    mixins: [Vue2Filters.mixin]
  };
</script>