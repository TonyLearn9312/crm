<template>
  <div id="users">
    <header>
      <span class="users-tag">Users</span>
      <span class="el-icon-circle-plus"></span>
    </header>
    <div class="users-table">
      <el-table
         :data="
          tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)
        "
        header-align="center"
        border
        style="width: 100%"
      >
        <el-table-column prop="date" align="center" label="ID">
        </el-table-column>
        <el-table-column prop="name" align="center" label="Name">
        </el-table-column>
        <el-table-column prop="title" align="center" label="Title">
        </el-table-column>
        <el-table-column prop="group" align="center" label="Group">
        </el-table-column>
        <el-table-column prop="email" align="center" label="Email">
        </el-table-column>
        <el-table-column prop="phone" align="center" label="Phone">
        </el-table-column>
        <el-table-column header-align="center"  label="Access">
          <template slot-scope="scope">
            <!-- 使用组件, 并传值到组件中 -->
            <popover
              content="确定要删除?"
              :id="scope.row.id"
              :row="scope.row"
              :access="access"
            ></popover>
          </template>
        </el-table-column>
        <el-table-column align="center" label="Operation">
          <template slot-scope="scope">
            <delete-popover
              :id="scope.$index"
              :row="scope.row"
              :access="access"
            >
            </delete-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagevue
      :pagenum="tableData.length"
      :currentpages="currentpage"
      :pagesizes="pagesize"
      v-on:fromchildren="fromchildren"
    ></pagevue>
  </div>
</template>
<script>
import Popover from "@/views/users/popover";
import DeletePopover from "@/views/users/DeletePopover";
export default {
  components: {
    Popover,
    DeletePopover,
  },
  data() {
    return {
          currentpage: 1,
      pagesize: 14,
      visible: false,
      access: [
        "可以访问全部地区",
        "可以访问韩国地区",
        "可以访问客户A",
        "可以访问客户B",
        "可以访问客户C",
        "可以访问客户D",
      ],
      tableData: [
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: [
            "可以访问全部地区",
            "可以访问韩国地区",
            "可以访问客户A",
            "可以访问客户B",
          ],
          selectAccess: [
            "可以访问全部地区",
            "可以访问韩国地区",
            "可以访问客户A",
            "可以访问客户B",
          ],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区"],
          selectAccess: ["可以访问全部地区"],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问客户A", "可以访问客户B"],
          selectAccess: [],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区"],
          selectAccess: ["可以访问全部地区"],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问客户A", "可以访问客户B"],
          selectAccess: [],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区"],
          selectAccess: ["可以访问全部地区"],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问客户A", "可以访问客户B"],
          selectAccess: [],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区"],
          selectAccess: ["可以访问全部地区"],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问客户A", "可以访问客户B"],
          selectAccess: [],
        },
             {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区"],
          selectAccess: ["可以访问全部地区"],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问客户A", "可以访问客户B"],
          selectAccess: [],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区"],
          selectAccess: ["可以访问全部地区"],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问客户A", "可以访问客户B"],
          selectAccess: [],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区"],
          selectAccess: ["可以访问全部地区"],
        },
        {
          date: "KO-SA-Tom",
          name: "王小虎",
          title: "Manager",
          group: "韩国销售组",
          email: "353250@gmail.com",
          phone: "+86456456",
          access: ["可以访问全部地区", "可以访问客户B"],
          selectAccess: [],
        },
      ],
    };
  },
  mounted() {},
  methods: {
     fromchildren(data) {
      this.currentpage = data.currentpage;
    //   this.changepage(data.currentpage, data.pagesize);
    },
  },
};
</script>
<style lang="scss">
.el-popover__reference {
  cursor: pointer;
}
.el-input {
  font-size: 12px;
}
.el-input__inner {
  height: 30px;
  line-height: 30px;
}
.el-select-dropdown__item {
  font-size: 12px;
}

.el-checkbox__label {
  font-size: 12px;
}
</style>
<style lang="scss" >
#users {
  // height: calc(100% - 30px);
  // overflow-y: auto;
  //   padding: 0 15px;
  position: absolute;
  left: $gap-width;
  //   @include border($px: 1px, $color: #2c3e50);
  width: $Sidebar-width + $main-width + $gap-width * 1;
  header {
    line-height: 40px;
    .users-tag {
      margin-left: 30px;
      margin-right: 10px;
    }
    .el-icon-circle-plus {
      cursor: pointer;
      &:hover {
        color: aqua;
      }
    }
    height: 40px;
    //   margin-bottom: 20px;
    // border-bottom: 1px solid #2c3e50;
    // @include border($px: 1px, $color: #000000, $shape: solid, $radius: 0);
  }
  .users-table {
    // @include border($px: 1px, $color: #2c3e50);
  }
}
</style>