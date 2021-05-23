<template>
  <div id="path1">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="当前方案保存路径">
        <el-input v-model="formInline.path" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        path: "",
        region: "",
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