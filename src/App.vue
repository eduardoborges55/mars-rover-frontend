<template>
  <div>
    <MarsRoverForm @formSubmitted="handleFormSubmission" />
    <RoverResult :roverResult="roverResult" />
  </div>
</template>

<script>
import MarsRoverForm from "@/components/MarsRoverForm.vue";
import RoverResult from "@/components/RoverResult.vue";

export default {
  components: {
    MarsRoverForm,
    RoverResult,
  },
  data() {
    return {
      roverResult: {},
    };
  },
  methods: {
    async handleFormSubmission(response) {
      try {
        const roverData = response.data;

        this.roverResult = roverData;
      } catch (error) {
        console.error("Erro ao manipular dados recebidos:", error.message);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>