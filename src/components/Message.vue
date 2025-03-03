<template>
  <div :class="['message-container', type]" v-if="msg">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: String,
    type: String, // Define se a mensagem é de erro ou sucesso
  },
};
</script>

<style scoped>
.message-container {
  color: #ffffff;
  border: 2px solid #ffffff;
  text-align: center;
  border-radius: 8px;
  padding: 10px;
  max-width: 400px;
  margin: 30px auto;
  font-weight: bold;
}

.success {
    /*asdasdasdasdasdasdasdsa*/
  background-color: #4caf50; 
}

.error {
  background-color: #f01111; /* Vermelho para erro */
}
</style>
