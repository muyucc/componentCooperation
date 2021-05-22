<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        mode="vertical"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#409eff"
        class="el-menu-vertical-demo"
      >
        <router-link to="/home">
          <el-menu-item index="0">
            <i class="fa fa-margin fa-server"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
        <template v-for="item in items">
          <el-submenu v-if="item.children" :index="item.path" :key="item.path">
            <template slot="title">
              <i :class="'fa fa-margin ' + item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <router-link
              v-for="(citem, cindex) in item.children"
              :to="citem.path"
              :key="cindex"
            >
              <el-menu-item :index="citem.path">
                <span slot="title">{{ citem.name }}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "方案",
          path: "proposal",
          children: [
            { path: "createNewProposal", name: "新建方案" },
            { path: "openProposal", name: "打开方案" },
            { path: "mangerProposal", name: "管理方案" },
            { path: "proposalCheck", name: "审核方案" },
          ],
        },
        {
          icon: "fa-asterisk",
          name: "设计流程",
          path: "design",
          children: [
            { path: "wmhs", name: "整机液压系统" },
            { path: "hydraulicPowerComponents", name: "液压动力元件" },
            { path: "hydraulicControlComponents", name: "液压控制元件" },
            { path: "hydraulicActuator", name: "液压执行元件" },
            { path: "hydraulicAuxiliaryComponents", name: "液压辅助元件" },
          ],
        },
        {
          icon: "fa-asterisk",
          name: "对比分析",
          path: "compare",
          children: [{ path: "infoshow", name: "个人信息" }],
        },
        {
          icon: "fa-asterisk",
          name: "质量管理",
          path: "qulity",
          children: [{ path: "infoshow", name: "个人信息" }],
        },
        {
          icon: "fa-asterisk",
          name: "数据库",
          path: "database",
          children: [{ path: "infoshow", name: "个人信息" }],
        },
        {
          icon: "fa-asterisk",
          name: "设置",
          path: "setting",
          children: [{ path: "infoshow", name: "个人信息" }],
        },
        {
          icon: "fa-asterisk",
          name: "权限管理",
          path: "authority",
          children: [{ path: "infoshow", name: "个人信息" }],
        },
        {
          icon: "fa-asterisk",
          name: "帮助",
          path: "help",
          children: [{ path: "infoshow", name: "个人信息" }],
        },
      ],
    };
  },
};
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
