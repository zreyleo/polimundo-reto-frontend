<template>
  <div>
    <h1>
      Resultados
    </h1>
    <SearchResult />
  </div>
</template>

<script>
import SearchResult from '@/components/SearchResult.vue';
export default {
    name: "Results",
    components: { SearchResult }
};
</script>
