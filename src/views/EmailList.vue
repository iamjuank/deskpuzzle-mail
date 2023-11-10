<template>
  <div class="emailList">
    <el-table :data="records" style="width: 100%">
      <el-table-column prop="from" label="From"></el-table-column>
      <el-table-column prop="subject" label="Subject"></el-table-column>
      <el-table-column prop="date" label="Date"></el-table-column>
      <el-table-column label="Operations" width="180">
        <template slot-scope="scope">
          <el-button
            class="viewMail"
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >
            View
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="Detalles del correo"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
    >
      <EmailDetail :email="currentEmail" />
    </el-dialog>
  </div>
</template>

<script>
import EmailDetail from "./EmailDetail.vue";

export default {
  components: {
    EmailDetail
  },
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log("Records received:", this.records);
  },
  data() {
    return {
      dialogVisible: false,
      currentEmail: null
    };
  },
  methods: {
    handleClick(email) {
      this.currentEmail = email;
      this.dialogVisible = true;
    }
  }
};
</script>
