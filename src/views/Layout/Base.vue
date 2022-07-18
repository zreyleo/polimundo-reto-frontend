<template>
  <v-app>
    <v-main>
      <div>
        <v-btn text :to="{ name: 'Home' }" exact>Inicio</v-btn>
        <v-btn text :to="{ name: 'Search' }" exact>Buscar</v-btn>
        <v-btn text :to="{ name: 'Results' }" exact>Resultados</v-btn>
      </div>

      <router-view />
    </v-main>

    <main-footer />
  </v-app>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'Base',
  components: {
    MainFooter,
  },
};
</script>
