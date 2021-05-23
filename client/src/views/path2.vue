<template>
  <div id="path1">
    <el-form :model="formInline" class="demo-form-inline">
      <el-form-item label="软件1路径设置">
        <el-input v-model="formInline.path1" placeholder=""></el-input>
        <el-button @click="onSubmit">确定</el-button>
      </el-form-item>

      <el-form-item label="软件2路径设置">
        <el-input v-model="formInline.path2" placeholder=""></el-input>
        <el-button @click="onSubmit">确定</el-button>
      </el-form-item>

      <el-form-item label="软件3路径设置">
        <el-input v-model="formInline.path3" placeholder=""></el-input>
        <el-button @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        path1: "",
        path2: "",
        path3: "",
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