<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  created() {
    this.$store.dispatch("app/getCoins")
  },
};
</script>

<style>
#app {
  font-family: 'Montserrat', PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
}
</style>
