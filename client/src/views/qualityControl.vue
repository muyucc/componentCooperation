<template>
  <div>
    <div id="select">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <!-- 下载 -->
    <div id="download" v-if="value == '选项1'">
      <el-form ref="form" :model="form1" label-width="80px">
        <el-form-item label="机型选择">
          <el-select v-model="form1.machineType" placeholder="">
            <el-option label="一" value="一"></el-option>
            <el-option label="二" value="二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="故障部位">
          <el-select v-model="form1.faultLocation" placeholder="">
            <el-option label="一" value="一"></el-option>
            <el-option label="二" value="二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="故障代码">
          <el-select v-model="form1.errorCode" placeholder="">
            <el-option label="一" value="一"></el-option>
            <el-option label="二" value="二"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="起始时间"
              v-model="form1.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              placeholder="结束时间"
              v-model="form1.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">获取数据</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 上传 -->

    <div id="upload" v-if="value == '选项2'">
      <el-form ref="form2" :model="form2" label-width="80px">
        <el-form-item label="选择文件">
          <el-input v-model="form2.file"></el-input>
        </el-form-item>
        <el-form-item label="初审人员">
          <el-input v-model="form2.firstCheck"></el-input>
        </el-form-item>
        <el-form-item label="所长">
          <el-input v-model="form2.leader"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认上传</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_data1: {
        time: "",
        keyword: "",
      },
      search_data2: {
        time: "",
        keyword: "",
      },

      options: [
        {
          value: "选项1",
          label: "二元表下载",
        },
        {
          value: "选项2",
          label: "二元表上传",
        },
      ],
      value: "",

      form1: {
        machineType: "",
        faultLocation: "",
        errorCode: "",
        date1: "",
        date2: "",
      },
      form2: {
        file: "",
        firstCheck: "",
        leader: "",
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