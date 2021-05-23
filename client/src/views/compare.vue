<template>
  <div id="compara">
    <el-radio v-model="radio" label="1">整机设计结果对比</el-radio>
    <el-radio v-model="radio" label="2">动力元件设计结果对比</el-radio>
    <el-radio v-model="radio" label="3">控制元件设计结果对比</el-radio>
    <el-radio v-model="radio" label="4">执行结果设计结果对比</el-radio>
    <el-radio v-model="radio" label="5">辅助元件设计结果对比</el-radio>

    <el-row>
      <el-col :span="12">
        <span>数据库方案/元件</span>
        <el-form :model="form1">
          <el-form-item>
            <el-input
              placeholder="请输入方案/元件"
              v-model="form1.name"
            ></el-input>
            <el-button @click="handle1">添加</el-button>
            <div id="addElement" v-if="btn1 == 1">
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
                >全选</el-checkbox
              >
              <div style="margin: 15px 0"></div>
              <el-checkbox-group
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
              >
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                  city
                }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
        </el-form>
      </el-col>

      <el-col :span="12">
        <span>本地方案/元件</span>
        <el-form :model="form2">
          <el-form-item>
            <el-input type="file" placeholder="请选择文件"></el-input>
            <el-button @click="handle2">添加</el-button>
            <div id="addElement" v-if="btn2 == 1">
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
                >全选</el-checkbox
              >
              <div style="margin: 15px 0"></div>
              <el-checkbox-group
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
              >
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                  city
                }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      btn1: 0,
      btn2: 0,
      radio: "",
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      form1: {},
      form2: {},
    };
  },
  methods: {
    handle1() {
      this.btn1 = 1;
    },
    handle2() {
      this.btn2 = 1;
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style>
</style>