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
          <select class="pao-select" name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label class="carne ">Escolha a carne do seu burger: </label>
          <select class="carne-select" name="carne " id="carne " v-model="carne">
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

import Message from './Message.vue';

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
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },  // Corrigido o erro de digitação
        body: dataJson,
      });

      const res = await req.json();

      this.msg = `Pedido realizado com sucesso! Código: ${res.id}`;

      setTimeout(() => (this.msg = ""), 3000);

      //limpar os campos
        (this.nome = ""),
        (this.carne = ""),
        (this.pao = ""),
        (this.opcionais = []);
    },
  },
  mounted() {
    this.getIngredientes();
  },
  components: {
    Message
  }
};
</script>

<style scoped>
.burger-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 8%;
}
label {
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 6%;
  color: #222;
  padding: 9px 10px;
  border-left: 4px solid #fcba03;
}
input,
select {
  padding: 5px 10px;
  width: 100%;
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
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>