<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <router-link to="/" class="navbar-brand">Bowen's Cookbook</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to='/recipes/new' class="nav-link">New Recipe</router-link>
          </li>

          <li class="nav-item">
            <router-link to='/signup' class="nav-link">Sign Up</router-link>
          </li>

          <li class="nav-item">
            <router-link to='/login' class="nav-link">Login</router-link>
          </li>

          <li class="nav-item">
            <router-link to='/logout' class="nav-link">Logout</router-link>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model='titleFilter'>
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<style>

</style>

<script>
  export default {
    data: function() {
      return {
              titleFilter: ''
      };
    }
  };
</script>
