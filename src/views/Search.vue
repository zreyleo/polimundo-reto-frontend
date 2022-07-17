<template>
  <div>
    <h1>Buscador de Tickets</h1>
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm.vue';

export default {
  name: 'Home',

  components: {
    SearchForm
},
};
</script>