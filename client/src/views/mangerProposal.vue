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
    <!-- 方案上传 -->
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
    <!-- 方案查询 -->

    <div id="query" v-if="value == '选项2'">
      <!-- 选择器1 -->
      <div id="filter1">
        <el-form :inline="true" ref="search_data1" :model="search_data1">
          <el-form-item label="上传时间:">
            <el-date-picker
              v-model="search_data1.time"
              type="datetime"
              placeholder="选择开始时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item placeholder="关键字">
            <el-input v-model="search_data1.keyword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="small"
              icon="search"
              @click="onScreeoutMoney()"
              >筛选</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!-- 表格1 -->
      <div id="table1">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column label="方案名称" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{
                scope.row.proposalName
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上传时间" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="初审状态" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.state1 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="所长审核状态" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.state2 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleView(scope.$index, scope.row)"
                >查看设计文档</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 选择器2 -->
      <div id="filter2">
        <el-form :inline="true" ref="search_data2" :model="search_data2">
          <el-form-item label="上传时间:">
            <el-date-picker
              v-model="search_data2.time"
              type="datetime"
              placeholder="选择开始时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item placeholder="关键字">
            <el-input v-model="search_data2.keyword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="small"
              icon="search"
              @click="onScreeoutMoney()"
              >筛选</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!-- 表格2 -->
      <div id="table2">
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column label="方案名称" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{
                scope.row.proposalName
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上传时间" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上传人" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="工号" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleView(scope.$index, scope.row)"
                >查看设计文档</el-button
              >
              <el-button
                size="mini"
                @click="handleDownload(scope.$index, scope.row)"
                >下载</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
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
          label: "方案上传",
        },
        {
          value: "选项2",
          label: "方案查询",
        },
      ],
      value: "",
      form: {
        proposalname: "",
        review: "",
        name: "",
      },
      tableData1: [
        {
          proposalName: "方案一",
          date: "2021-5-9",
          state1: "通过",
          state2: "通过",
        },
      ],
      tableData2: [
        {
          proposalName: "方案一",
          date: "2021-5-9",
          name: "王二狗",
          number: "1314520",
        },
      ],
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