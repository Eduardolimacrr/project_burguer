<template>
  <div class="banner-class">
    <h1 class="banner-class__h1">Make Your Burger</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner-class {
  background-image: url("/public/img/burger.jpg");
  background-position: 0 -250px;
  background-size: cover;
  height: 825px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.banner-class h1 {
  color: #fff;
  text-align: center;
  font-size: 60px;
  background-color: #222;
  padding: 20px 40px;
}


</style>