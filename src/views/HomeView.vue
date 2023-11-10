<template>
  <div class="home">
    <LoginApp />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginApp from "@/components/Login.vue";

export default {
  name: "HomeView",
  components: {
    LoginApp
  }
};
</script>
<style scoped></style>
