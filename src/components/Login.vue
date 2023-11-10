<template>
  <div class="LoginApp">
    <el-card class="box-card">
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
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      password: "",
      checked: false,
    };
  },
  name: "LoginApp",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.box-card {
  width: 480px;
}
.LoginApp {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
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
</style>
