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
  name: "EmailDetail",
  props: {
    email: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      records: [
        {
          id: 1,
          subject: "Introducing El-Mail",
          from: "team@el-mail.com",
          to: "john.doe@gmail.com",
          body: "Dear John, ..."
        }
      ]
    };
  }
};
</script>

<style scoped>
.email-detail {
  margin: 20px;
}
</style>
