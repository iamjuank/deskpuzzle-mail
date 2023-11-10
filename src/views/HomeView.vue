<template>
  <div id="app">
    <navMenu />
    <LoginApp />
  </div>
</template>

<script>
import LoginApp from "@/components/Login.vue";
import navMenu from "@/components/navMenu.vue";

export default {
  name: "LoginApp",
  components: {
    LoginApp,
    navMenu,
  },
};
</script>
