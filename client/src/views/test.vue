<template>
  <div class="createNewProposal">
    <div class="form">
      <el-form
        ref="form"
        :model="form"
        :rules="form_rules"
        label-width="120px"
        style="margin: 10px; width: auto"
      >
        <el-form-item prop="proposalName" label="方案名称:">
          <el-input type="text" v-model="form.proposalName"></el-input>
        </el-form-item>

        <el-form-item prop="type" label="添加元件:">
          <el-select v-model="form.type" placeholder="添加元件">
            <el-option
              v-for="(formtype, index) in format_type_list"
              :key="index"
              :label="formtype"
              :value="formtype"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          v-if="form.type == '从数据库添加'"
          prop="element"
          label="元件选型:"
        >
          <el-input type="text" v-model="form.element"></el-input>
        </el-form-item>

        <el-form-item v-if="form.type == '从数据库添加'" label="元件配图:">
          <el-button @click="showImage">查看元件配图</el-button>
        </el-form-item>

        <el-form-item
          v-if="form.type == '从数据库添加'"
          prop="p1"
          label="参数1:"
        >
          <el-input type="number" v-model="form.p1"></el-input>
        </el-form-item>

        <el-form-item
          v-if="form.type == '从数据库添加'"
          prop="p2"
          label="参数2:"
        >
          <el-input type="number" v-model="form.p2"></el-input>
        </el-form-item>

        <el-form-item
          v-if="form.type == '从数据库添加'"
          prop="p3"
          label="参数3:"
        >
          <el-input type="number" v-model="form.p3"></el-input>
        </el-form-item>

        <el-form-item
          v-if="form.type == '从数据库添加'"
          prop="p4"
          label="参数4:"
        >
          <el-input type="number" v-model="form.p4"></el-input>
        </el-form-item>

        <el-form-item
          v-if="form.type == '从数据库添加'"
          prop="p5"
          label="参数5:"
        >
          <el-input type="number" v-model="form.p5"></el-input>
        </el-form-item>

        <el-form-item
          v-if="form.type == '从数据库添加'"
          prop="p6"
          label="参数6:"
        >
          <el-input type="number" v-model="form.p6"></el-input>
        </el-form-item>

        <el-form-item
          v-if="form.type == '添加新元件'"
          prop="element"
          label="元件选型:"
        >
          <el-input type="text" v-model="form.element"></el-input>
        </el-form-item>

        <el-form-item v-if="form.type == '添加新元件'" label="元件配图:">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item v-if="form.type == '添加新元件'" prop="p1" label="参数1:">
          <el-input type="number" v-model="form.p1"></el-input>
        </el-form-item>

        <el-form-item v-if="form.type == '添加新元件'" prop="p2" label="参数2:">
          <el-input type="number" v-model="form.p2"></el-input>
        </el-form-item>

        <el-form-item v-if="form.type == '添加新元件'" prop="p3" label="参数3:">
          <el-input type="number" v-model="form.p3"></el-input>
        </el-form-item>

        <el-form-item v-if="form.type == '添加新元件'" prop="p4" label="参数4:">
          <el-input type="number" v-model="form.p4"></el-input>
        </el-form-item>

        <el-form-item v-if="form.type == '添加新元件'" prop="p5" label="参数5:">
          <el-input type="number" v-model="form.p5"></el-input>
        </el-form-item>

        <el-form-item v-if="form.type == '添加新元件'" prop="p6" label="参数6:">
          <el-input type="number" v-model="form.p6"></el-input>
        </el-form-item>

        <!-- <el-form-item v-if="form.type == '添加新元件'" label="元件选型:">
          <div class="demo-image__placeholder">
            <div class="block">
              <span class="demonstration">元件配图</span>
              <el-image :src="src"></el-image>
            </div>
          </div>
        </el-form-item> -->

        <!-- <el-form-item prop="describe" label="收支描述:">
          <el-input type="describe" v-model="form.describe"></el-input>
        </el-form-item>

        <el-form-item prop="income" label="收入:">
          <el-input type="income" v-model="form.income"></el-input>
        </el-form-item>

        <el-form-item prop="expend" label="支出:">
          <el-input type="expend" v-model="form.expend"></el-input>
        </el-form-item>

        <el-form-item prop="cash" label="账户现金:">
          <el-input type="cash" v-model="form.cash"></el-input>
        </el-form-item>

        <el-form-item label="备注:">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item> -->

        <el-form-item class="text_right">
          <!-- <el-button @click="dialog.show = false">取 消</el-button> -->
          <el-button type="primary" @click="onSubmit('form')">提 交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "createName",
  props: {
    dialog: Object,
    form: Object,
  },
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      format_type_list: ["从数据库添加", "添加新元件"],
      form_rules: {
        // describe: [
        //   { required: true, message: "收支描述不能为空！", trigger: "blur" },
        // ],
        // income: [
        //   { required: true, message: "收入不能为空！", trigger: "blur" },
        // ],
        // expend: [
        //   { required: true, message: "支出不能为空！", trigger: "blur" },
        // ],
        // cash: [{ required: true, message: "账户不能为空！", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit(form) {
      console.log("二狗二狗，我是地瓜！");
      //   this.$refs[form].validate((valid) => {
      //     if (valid) {
      //       //表单数据验证完成之后，提交数据;
      //       const url =
      //         this.dialog.option == "add" ? "add" : `edit/${this.form.id}`;
      //       this.$axios.post(`/api/profile/${url}`, this.form).then((res) => {
      //         // 操作成功
      //         this.$message({
      //           message: "保存成功！",
      //           type: "success",
      //         });
      //         this.dialog.show = false;
      //         this.$emit("update");
      //       });
      //     }
      //   });
    },
  },
};
</script>