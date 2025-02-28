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
  
  text-decoration: none;
  margin-left: 6%;
  border-radius: 25px;
  font-family: "Marck Script", serif;
  
  font-size: 350%;
  border: 1px solid #ff9100;
  margin-left: 8% ;
  color: #ff9100;
  text-align: center;
  background-color: #08060000;
  padding: 1% 3%;
  transition: .5s;
  text-shadow: 0px 0px 30px rgba(255, 166, 0, 0.5);
  box-shadow: 0px 0px 30px rgba(255, 140, 0, 0.5);

}

.banner-class h1:hover {
  font-weight: bold;
  box-shadow: 0px 0px 20px rgba(255, 140, 0, 0.5);
  text-shadow: 0px 0px 20px rgba(112, 62, 1, 0.5);
  color: #9e5a00;
  
  background-color: #cab989;
  
}


</style>