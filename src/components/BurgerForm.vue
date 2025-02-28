// src/components/BurgerForm.vue
<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form class="burger-form" method="POST" @submit="createBurger">
        <div class="input-container">
          <label class="nome-label" for="nome">Nome do cliente: </label>
          <input
            type="text"
            class="nome"
            name="nome"
            v-model="nome"
            placeholder="Digite o seu nome "
          />
        </div>
        <div class="input-container">
          <label class="pao">Escolha o pão: </label>
          <select class="pao-select" name="pao" id="pao" v-model="pao" placeholder="Selecione seu pão">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label class="carne">Escolha a carne do seu burger: </label>
          <select
            class="carne-select"
            name="carne "
            id="carne "
            v-model="carne"
          >
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>
        <div class="opcionais-container input-container">
          <label class="opcionais-title" for="opcionais"
            >Selecione os opcionais:</label
          >
          <div
            class="checkbox-container"
            v-for="opcional in opcionaisData"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="opcional.tipo"
            />
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import molecular from "../services/molecular.js"; // Certifique-se de que o caminho está correto!
import Message from "./Message.vue";

export default {
  name: "BurgerForm",
  data() {
    return {
      paes: [],
      carnes: [],
      opcionaisData: [],
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null,
    };
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();


      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisData = data.opcionais;

      console.log(data);
    },
    async createBurger(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        pao: this.pao,
        carne: this.carne,
        opcionais: this.opcionais,
        status: "Solicitado",
      };

      //OQ FEZ O PEDIDO DAR ERRO///////////////////////////////////////////////////////

       try {
        const res = await molecular.enviarPedido(data); // Envia o pedido para o Molecular via HTTP
        this.msg = `Pedido realizado com sucesso ${res.nome}!`;

        // Emite o evento para atualizar os pedidos na página de Dashboard
        this.$emit('pedidoCriado', res); 

      } catch (error) {
        console.error("Erro ao enviar pedido para o Molecular:", error);
        this.msg = `Erro ao realizar o pedido. Insira todos os dados necessários.`;
      }

      setTimeout(() => (this.msg = ""), 3000);

      // Limpar os campos após o envio
      (this.nome = ""),
      (this.pao = ""),
      (this.carne = ""),
      (this.opcionais = []);
    },
  },
  mounted() {
    this.getIngredientes();
  },
  components: {
    Message,
  },
};
</script>


<style scoped>
.burger-form {
  max-width: 550px;
  margin: 0 auto;
  padding: 3% 3%;
  border-radius: 56px;
  background-color: #333;
  border: 5px solid #ff9100;
  box-shadow: 0px 0px 30px rgba(255, 140, 0, 0.5);
  align-items:flex-end;


}
.input-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  color: white;
  margin-bottom: 8%;
  border-radius: 56px;
  
  

}
label {
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 8%;
  color: white;
  padding: 9px 10px;
  border-left: 4px solid #ff9100;
  
}
input,

select {
  padding: 5px 10px;
  width: 100%;
  border-radius: 8px;
  
}

.opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;

}

.opcionais-title {
  width: 100%;

}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;

}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
  
}

.submit-btn {
  background-color: #222;
  color: #fffffe;
  font-weight: bold;
  border: 2px solid #ff9100;
  border-radius: 50px;
  padding: 10px;
  font-size: 20px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #ff9100;
  font-weight: bold;
  box-shadow: 0px 0px 20px rgba(255, 140, 0, 0.5);
  text-shadow: 0px 0px 20px rgba(112, 62, 1, 0.5);
  color: #9e5a00;
  
  background-color: #cab989;
}


</style>