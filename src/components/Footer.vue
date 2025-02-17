<template>
  <div id="footer" class="footer-class" >
    <p>Make Your Burger © 2021</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer {
  height: 200px;
  background-color: #222;
  border-top: 4px solid #111;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
}

#footer p {
  /* Adicione este estilo para o elemento <p> */
  color: #fcba03;
}
</style>