// src/services/molecular.js
import axios from "axios"; // Importa o axios para requisições HTTP

export default {  

  async enviarPedido(data) {
    const pedidoComStatus = {
      ...data,
      status: "Solicitado", // Definindo status como 'Em produção'
    };
    try {
      // Envia o pedido via POST para o backend (onde o Moleculer está rodando)
      const res = await axios.post("http://localhost:3001/api/pedido/criar", pedidoComStatus);
      console.log("Resposta do Moleculer:", res.data);
      return res.data;
    } catch (err) {
      console.error("Erro ao enviar pedido para o Molecular:", err);
      throw err;
    }
  }
};
