<script>
  import { Router, Route } from 'svelte-routing';
  import PageQueries from './routes/PageQueries.svelte';
  import PageMutation from './routes/PageMutation.svelte';
  import NavLink from './components/NavLink.svelte';

  export let url = '';
</script>

<style>
  .title {
    background-color: #444444;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: xx-large;
  }

  nav {
    background-color: #ff3e00;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white; 
  }
</style>

<div class="title">graphql-codegen-svelte-apollo</div>

<Router {url}>
  <nav>
    <NavLink to="/">Query</NavLink>
    <NavLink to="mutation">Mutation</NavLink>
  </nav>
  <div>
    <Route path="">
      <PageQueries />
    </Route>
    <Route path="mutation">
      <PageMutation />
    </Route>
  </div>
</Router>
