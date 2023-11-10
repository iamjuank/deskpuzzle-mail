<template>
  <div id="app">
    <nav>
      <img class="logo" src="./assets/logo.png" alt="OFPZL logo" />
      <div class="options">
        <router-link to="/">Login</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<style>
@import "./assets/global.css" #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}

nav::before {
  content: "";
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #ccc;
}
.options {
  color: rgb(235, 238, 243);
}
nav a {
  font-weight: bold;
  color: rgb(235, 238, 243);
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  height: 50px;
  margin-left: 10px;
}
.options {
  margin-left: auto;
  margin-right: 10px;
}
.main-container {
  margin-top: 60px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
