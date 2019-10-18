<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    checkUser() {
      if (localStorage.getItem("userId")) this.$router.push("/home");
    }
  },
  created() {
    this.checkUser();
  }
};
</script>
<style>
</style>
