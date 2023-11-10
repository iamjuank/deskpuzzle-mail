<template>
  <el-card class="email-detail">
    <h2>{{ email.subject }}</h2>
    <h3>From: {{ email.from }}</h3>
    <h4>To: {{ email.to }}</h4>
    <p>{{ email.body }}</p>
  </el-card>
</template>

<script>
export default {
  props: {
    email: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.email-detail {
  margin: 20px;
}
</style>