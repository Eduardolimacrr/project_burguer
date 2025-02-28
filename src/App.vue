<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  data: function() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Burger"
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 55px;
    min-height: 250px;

  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
  
    color: #ff9100;
  }
  body {
  background-color: #222; /* Troque para a cor desejada */
  color: white; /* Ajusta a cor do texto */
}
</style>