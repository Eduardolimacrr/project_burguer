<template>
  <div class="burger-table">
    <Message :msg="msg" v-show="msg" />

    <div>
      <div class="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div class="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        <div>
        <div>
          <ul>
            <li
                v-for="(opcional, index) in parsedOpcionais(burger.opcionais)" :key="index">     {{ opcional }}
            </li>
          </ul>
        </div>  
        </div>
        <div>
          <select
            name="status"
            class="status"
            @change="updateBurger($event, burger.id)"
          >
            <option
              v-for="s in status"
              :key="s.id"
              :value="s.tipo"
              :selected="burger.status == s.tipo"
            >
              {{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.id)">
            Deletar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      burgers: [],
      //burger_id: [],
      status: [],
      msg: null,
    };
  },
  components: {
    Message,
  },
  methods: {
     parsedOpcionais(opcionaisString) { ////arrumar a formatação dos opcionais na aba pedidos
      try {
        const opcionaisArray = JSON.parse(opcionaisString);
        return opcionaisArray;
      } catch (error) {
        console.error("Erro ao fazer o parse dos opcionais:", error);
        return []; 
      }
    },

    async getPedidos() {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/pedido/listar"
        );
        this.burgers = response.data; // Correção: Usar burgers
        console.log("Pedidos carregados:", this.burgers); // Verifique os dados
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
        this.msg = "Erro ao carregar pedidos.";
      }
    },

    async getStatus() {
      try {
        const req = await fetch("http://localhost:3000/status");
        const data = await req.json();
        this.status = data;
      } catch (error) {
        console.error("Erro ao buscar status:", error);
        this.msg = "Erro ao carregar status.";
      }
    },
    async deleteBurger(id) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/api/pedido/${id}`
        );
        console.log("Pedido deletado:", response.data);
        this.msg = "Pedido deletado com sucesso!";

        this.getPedidos(); 
      } catch (error) {
        console.error("Erro ao deletar pedido:", error);
        this.msg = `Erro ao deletar pedido: ${error.message}`;
      }

      setTimeout(() => (this.msg = ""), 3000);
    },

    async updateBurger(event, id) {
      const status = event.target.value;

      try {
        const response = await axios.put(
          `http://localhost:3001/api/pedido/${id}`,
          { status }
        );

        console.log("Pedido atualizado:", response.data);
        this.msg = "Pedido atualizado com sucesso!";
        this.getPedidos();
      } catch (error) {
        console.error("Erro ao atualizar pedido:", error);
        this.msg = `Erro ao atualizar pedido: ${error.message}`;
      }

      setTimeout(() => (this.msg = ""), 3000);
    },
  },
  mounted() {
    this.getPedidos();
    this.getStatus();
  },
};
</script>

<style scoped>
.burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

.burger-table-heading,
.burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

.burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

.burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
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

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
