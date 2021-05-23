<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item>
      <el-col :span="7">
        <el-select v-model="form.database" placeholder="请选择数据库">
          <el-option label="数据库一" value="数据库一"></el-option>
          <el-option label="数据库二" value="数据库二"></el-option>
        </el-select>
      </el-col>
      <el-col class="line" :span="1">-</el-col>
      <el-col :span="7">
        <el-select v-model="form.table" placeholder="请选择数据库">
          <el-option label="表一" value="表一"></el-option>
          <el-option label="表二" value="表二"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button @click="handleRun">运行</el-button>
      </el-col>
      <el-col :span="4">
        <el-button @click="handleStop">停止</el-button>
      </el-col>
    </el-form-item>

    <el-form-item label="查询">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        database: "",
        table: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
</style>