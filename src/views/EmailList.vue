<template>
  <div class="emailList">
    <el-table :data="records" style="width: 100%">
      <el-table-column prop="from" label="From"></el-table-column>
      <el-table-column prop="subject" label="Subject"></el-table-column>
      <el-table-column prop="date" label="Date"></el-table-column>
      <el-table-column label="Operations" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >View</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    records: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(email) {
      this.$emit("email-clicked", email);
    },
  },
};
</script>

<style scoped>
.emailList {
  margin-top: 5%;
}
</style>
