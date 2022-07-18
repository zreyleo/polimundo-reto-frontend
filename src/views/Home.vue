<template>
  <div>
    <img
      alt="Vue logo"
      src="../assets/polimundo.svg"
      width="200px"
      height="auto"
    />
    <h1>Challenge Frontend</h1>
    <ul style="text-align: left;">
      <li>Vas a utilizar Vue.js v2.</li>
      <li>Vas a usar Vite para levantar un ambiente prototipo.</li>
      <li>Integra BootstrapVue ó Vuetify para usarlo de framework de estilos de UI.</li>
      <li>Usando los elementos de del framework anterior, crea las siguientes páginas:</li>
      <li>Una página donde haya un buscador de tickets aereos, con los siguientes campos: Ciudad de origen, ciudad de destino, fecha de salida, fecha de retorno.</li>
      <li>Una página donde se muestren resultados de búsqueda de tickets aéreos, cada tarjeta de resultado debería tener: precio, aerolínea, número de escalas, duración del vuelo.</li>
      <li>Debes usar vue router y vuex.</li>
      <li>Los datos deben estar quemados en el store, no pierdas tiempo en esto, pueden ser datos tipo lorem ipsum. No se necesita implementar la funcionalidad de búsqueda.</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
};
</script>
