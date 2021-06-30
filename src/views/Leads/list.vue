<template>
  <div id="leads">
    <header>
      <div class="header-title">
        <h3 class="leads-tag">Leads</h3>
        <span
          @click="addLeadsDialog = !addLeadsDialog"
          class="el-icon-circle-plus"
        ></span>
      </div>
      <!-- <div class="condition">
        <p>Last login</p>
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
      <div class="condition">
        <p>Interest</p>
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
      <div class="condition">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
        <el-button>默认按钮</el-button>
      </div> -->
    </header>
    <div class="leads-table">
      <el-table
        :data="
          tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)
        "
        border
        style="width: 100%"
      >
        <el-table-column prop="date" label="Status"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="address" label="Lead source"> </el-table-column>
        <el-table-column prop="address" label="Country"> </el-table-column>
        <el-table-column prop="address" label="local time"> </el-table-column>
        <el-table-column prop="address" label="interest"> </el-table-column>
        <el-table-column prop="address" label="priority"> </el-table-column>
        <el-table-column prop="address" label="Operation">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >View</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :close-on-click-modal="false"
      width="950px"
      title="添加Lead"
      center
      :visible.sync="addLeadsDialog"
    >
      <leads-details-component
        :sidebarSwitch="true"
        :editSwitch="false"
      ></leads-details-component>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addLeadsDialog = false">取 消</el-button>
        <el-button type="primary" @click="addLeadsDialog = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <pagevue
      :pagenum="tableData.length"
      :currentpages="currentpage"
      :pagesizes="pagesize"
      v-on:fromchildren="fromchildren"
    ></pagevue>
  </div>
</template>
<script>
import LeadsDetailsComponent from "./details_component.vue";
export default {
  components: {
    LeadsDetailsComponent,
  },
  data() {
    return {
      addLeadsDialog: false,
      currentpage: 1,
      pagesize: 13,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      rules: {
        name: [{ required: true, message: "请选择交接人", trigger: "change" }],
      },
      ReplacementTable: [],
      addLeadsform: {},
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区sdfsdfdsfdsfdsf金沙江路 1518 弄",
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

      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
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
    deleteRow(index, rows) {
      // console.log(rows);
      this.contacts.push(...rows[index].contacts);
      this.contacts.sort((a, b) => a.value - b.value);
      this.tasks.push(...rows[index].tasks);
      this.tasks.sort((a, b) => a.value - b.value);
      this.leads.push(...rows[index].leads);
      this.leads.sort((a, b) => a.value - b.value);
      rows.splice(index, 1);
      // this.ReplacementTable.forEach(item=>{

      // })
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          for (var i in this.form) {
            if (i == "tasks" || i == "leads" || i == "contacts") {
              this.form[i].forEach((item) => {
                this[i].forEach((it, j) => {
                  if (item.value === it.value) {
                    this[i].splice(j, 1);
                  }
                });
              });
            }
          }
          this.ReplacementTable.push(this.form);
          this.form = Object.assign(this.form, {
            tasks: [],
            leads: [],
            contacts: [],
          });
          // this.form =  { name: "", tasks: [], leads: [], contacts: [] };
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: "/Home/Leads/leadsDetails" });
      //   this.form = { name: "", tasks: [], leads: [], contacts: [] };
      //   this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style lang="scss">
.el-select-dropdown__item {
  font-size: 12px;
}
</style>
<style lang="scss" >
#leads {
  //   padding: 0 15px;
  position: absolute;
  left: 0;
  height: 100%;
  width: $Sidebar-width + $main-width + $gap-width * 1;
  header {
    height: 40px;
    // border-bottom: 1px solid #2c3e50;
    line-height: 40px;
    display: flex;
    align-items: center;
    .header-title {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    .condition {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    .leads-tag {
      margin-left: 30px;
      margin-right: 10px;
    }
    .el-icon-circle-plus {
      cursor: pointer;
      &:hover {
        color: $themeColor;
      }
    }

    // @include border($px: 1px, $color: #000000, $shape: solid, $radius: 0);
  }
  .leads-table {
    //   @include border($px: 1px, $color: #2c3e50);
    // @include border($px: 1px, $color: #2c3e50);
  }
}
</style>