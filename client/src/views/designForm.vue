<template>
  <div id="designForm">
    <div id="upLoad" v-if="value == '选项1'">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="选择方案">
          <el-input v-model="form.proposalName"></el-input>
        </el-form-item>
        <el-form-item label="初审人员">
          <el-input v-model="form.review"></el-input>
        </el-form-item>
        <el-form-item label="所长">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>