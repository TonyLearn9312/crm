<template>
  <div id="home">
    <div class="top">
      <div style="height: 40px; background: #2c393e"></div>
      <el-menu
        :default-active="activeName"
        :unique-opened="true"
        active-text-color="#0ba347"
        class="el-menu-demo"
        mode="horizontal"
        menu-trigger="click"
        @select="handleSelect"
      >
        <el-menu-item index="dashboard" @click="routerto('/Home/dashboard')"
          >Dashboard</el-menu-item
        >
        <el-submenu :popper-append-to-body="false" index="Leads">
          <template slot="title">Leads</template>
          <el-menu-item @click="routerto('/Home/Leads/leadsList')" index="Leads"
            >List</el-menu-item
          >
          <!-- <el-menu-item
            @click="routerto('/Home/Leads/leadsDetails')"
            index="leadsDetails"
            >details</el-menu-item
          > -->
        </el-submenu>
        <el-submenu :popper-append-to-body="false" index="Contacts">
          <template slot="title">Contacts</template>
          <el-menu-item
            @click="routerto('/Home/Contacts/Contacts1/list')"
            index="Contacts1"
            >Table</el-menu-item
          >
        </el-submenu>
        <el-submenu :popper-append-to-body="false" index="Users">
          <template slot="title">Users</template>
          <el-menu-item
            index="Users1"
            @click="routerto('/Home/Users/Users1/UsersList')"
            >List</el-menu-item
          >
          <!-- <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item> -->
        </el-submenu>
        <el-submenu :popper-append-to-body="false" index="5">
          <template slot="title">Groups</template>
          <el-menu-item
            index="groups1"
            @click="routerto('/Home/groups/groups1/groupsList')"
            >List</el-menu-item
          >
          <!-- <el-menu-item index="5-2">选项2</el-menu-item>
          <el-menu-item index="5-3">选项3</el-menu-item> -->
        </el-submenu>
        <el-submenu :popper-append-to-body="false" index="6">
          <template slot="title">Access</template>
          <el-menu-item
            index="access1"
            @click="routerto('/Home/access/accessList')"
            >List</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </div>
    <div class="banner"></div>
    <main class="main">
      <div class="main-router-view">
        <router-view></router-view>
      </div>
      <div class="right-sidebar">
        <div class="today-tasks">
          <header @click="routerto('/Home/dashboard/tasks')">
            <h3>Tasks</h3>
          </header>
          <div class="box">
            <!-- <el-table
              :data="tableData"
              height="100%"
              border
              style="width: 100%"
            >
              <el-table-column prop="date" label="日期"> </el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table> -->
          </div>
        </div>
        <div class="hot-leads">
          <header @click="routerto('/Home/dashboard/leads')">
            <h3>Hot leads</h3>
          </header>
          <div class="box">
            <el-table
              :data="tableData"
              height="100%"
              border
              style="width: 100%"
            >
              <el-table-column prop="date" label="日期"> </el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          edit: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          edit: false,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          edit: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          edit: false,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          edit: false,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          edit: false,
        },
      ],
      ruleForm: {
        FirstName: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  mounted() {
    this.activeNameFun(this.$route);
    // this.getBreadcrumb();
  },
  computed: {
    /**
     * @msg: 根据路由地址，左侧菜单栏高亮显示的计算属性
     * @param {}
     * @return:路由地址（"/路由名字"）
     */
    // eslint-disable-next-line vue/return-in-computed-property
    defaultActive_Nav() {
      let routpath = this.$route.path;
      console.log(routpath);
      this.find(this.nav_menu_data, routpath);
      if (this.result) {
        return this.result;
      } else {
        // switch (routpath) {
        //   //添加老师
        //   case "/teachermanageAdd":
        //     return "/teachermanage";
        //   // 学员管理详情
        //   case "/userListDetail":
        //     return "/userList";
        // }
      }
    },
  },
  watch: {
    $route(index) {
      this.activeNameFun(index);
    },
  },
  methods: {
    find(arr, routePath) {
      if (!arr) {
        return;
      }
      arr.forEach((item) => {
        //debugger;
        if (item.path == routePath) {
          this.result = item.path;
        } else {
          this.find(item.chirldren, routePath);
        }
      });
    },
    activeNameFun(route) {
      console.log(route);
      let path = route.path.substr(1).split("/");
      if (
        path[1] == "Leads" ||
        path[1] == "Contacts" ||
        path[1] == "Users" ||
        path[1] == "access" ||
        path[1] == "groups"
      ) {
        this.activeName = path[2];
      } else {
        this.activeName = path[1];
      }
      console.log(this.activeName);
    },
    routerto(num) {
      this.$router.push({ path: num });
    },
    handleSelect(key) {
      console.log(key);
      // this.activeName=key
      // this.routerto(key);
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.meta.title);
      console.log(matched);
      // const first = matched[0];
      this.levelList = matched;
    },
  },
};
</script>
<style lang="scss">
#home {
  .el-select-dropdown__empty {
    font-size: 12px;
  }
  .el-menu--collapse .el-menu .el-submenu,
  .el-menu--popup {
    min-width: 100px;
  }
  .el-submenu .el-menu-item {
    min-width: 100px;
  }
  .el-menu-item,
  .el-submenu__title,
  .el-select-dropdown__item {
    font-size: 12px;
  }
  .el-menu-demo {
    height: 50px;
    padding: 0 15px;
  }
  .el-menu--horizontal > .el-menu-item {
    height: 50px;
    line-height: 50px;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
  }
}
</style>
<style lang="scss" scoped>
#home {
  height: 100%;
  .top {
    width: 100%;
    height: $Topheight;
  }
  .banner {
    width: 100%;
    height: $gap-width;
    //  background: $BackgroundColor;
  }
  main {
    position: relative;
    width: 100%;
    // background: $BackgroundColor;
    height: calc(100% - #{$Topheight} - #{$gap-width});
    overflow-y: auto;
    .main-router-view {
      position: absolute;
      left: $gap-width;
      width: $Sidebar-width + $main-width + $gap-width;
      height: calc(100% - 30px);
    }
    .right-sidebar {
      position: absolute;
      left: $Sidebar-width + $main-width + $gap-width * 3;
      font-size: 12px;
      width: $Sidebar-width;
      height: calc(100% - 30px);
      header {
        display: flex;
        align-items: center;
        @include boxModel(
          $width: 100%,
          $height: 40px,
          $background-color: #fff,
          $padding: 0,
          $margin: 0,
          $box-sizing: "border-box"
        );
        border-bottom: 1px solid $BackgroundColor;
        h3 {
          padding-left: 20px;
        }
      }
      box-sizing: border-box;
      > div {
        height: calc((100% - #{$gap-width}) / 2);
        @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
        overflow: hidden;
      }
      div.box {
        height: calc(100% - 40px);
      }
      div.today-tasks {
        margin-bottom: $gap-width;
      }
    }
  }
}
</style>