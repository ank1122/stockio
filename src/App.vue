<template>
  <div id="app">
    <h1>Welcome to Stock.io</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Warehouse from "./components/WarehousesDetails";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // Warehouse
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
