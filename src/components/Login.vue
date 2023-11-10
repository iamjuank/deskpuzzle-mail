<template>
  <div class="LoginApp">
    <el-card class="box-card">
      <div class="center-content">
        <img class="logo" alt="OFPZL Logo" src="../assets/logo.png" />
        <h3>DeskPuzzle Mail</h3>
        <el-input
          type="email"
          placeholder="email@example.com"
          v-model="input"
          clearable
        ></el-input>
        <div class="separacion"></div>
        <el-input
          type="password"
          placeholder="Password"
          v-model="password"
          clearable
        >
        </el-input>
        <div class="separacion"></div>
        <router-link to="/email">
          <el-button class="btn" type="success">Login</el-button>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      password: "",
      checked: false
    };
  },
  name: "LoginApp",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.box-card {
  width: 480px;
}
.LoginApp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.logo {
  width: 30%;
  height: 30%;
  border: 50%;
}
.btn {
  margin: 10px;
}
.separacion {
  height: 10px;
}
.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
