<template>
  <div>
    <h2>Configurações do Planalto e Rover</h2>

    <label for="plateauSize">Tamanho do Planalto:</label>
    <input type="text" id="plateauSize" v-model="plateauSize" placeholder="Ex: 5 5" />

    <label for="roverPosition">Posição do Rover:</label>
    <input type="text" id="roverPosition" v-model="roverPosition" placeholder="Ex: 1 2 N" />

    <label for="roverInstructions">Instruções do Rover:</label>
    <input type="text" id="roverInstructions" v-model="roverInstructions" placeholder="Ex: LMLMLMLMM" />

    <button @click="submitForm">Enviar</button>

    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      plateauSize: '',
      roverPosition: '',
      roverInstructions: '',
      previousFormData: null,
      error: '', 
    };
  },
  methods: {
    async submitForm() {
      try {
        this.error = '';

        if (!this.plateauSize || !this.roverPosition || !this.roverInstructions) {
          throw new Error('Todos os campos são obrigatórios.');
        }
        const roverPositionArray = this.roverPosition.split(' ');

        const roverData = {
          x: parseInt(roverPositionArray[0]),
          y: parseInt(roverPositionArray[1]),
          direction: roverPositionArray[2],
          instructions: this.roverInstructions,
        };

        if (JSON.stringify(roverData) === JSON.stringify(this.previousFormData)) {
          throw new Error('Os dados não foram alterados.');
        }

        this.previousFormData = { ...roverData };

        const response = await axios.post('/api/explore', {
          upperRightCoordinates: this.plateauSize.split(' ').map(Number),
          rovers: [roverData],
        });

        this.$emit('formSubmitted', response);
      } catch (error) {
        console.error('Erro ao enviar dados:', error.message);
        this.error = error.message;
      }
    },
  },
};
</script>

<style scoped>
</style>
