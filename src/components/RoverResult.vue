<template>
  <div>
    <h2>Resultados do Rover</h2>
    <div>
      <p>Posição de Pouso: {{ roverResult.initialPosition }}</p>
      <p>Instrução: {{ roverResult.instructions }}</p>
      <p>Posição Final: {{ roverResult.finalPosition }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roverResult: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
</style>