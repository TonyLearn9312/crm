<template>
  <div id="users">
    <header>
      <span class="users-tag">Users</span>
      <span class="el-icon-circle-plus"></span>
    </header>
    <div class="users-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="ID"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="address" label="Title"> </el-table-column>
        <el-table-column prop="address" label="Group"> </el-table-column>
        <el-table-column prop="address" label="Email"> </el-table-column>
        <el-table-column prop="address" label="Phone"> </el-table-column>
        <el-table-column prop="address" label="Access"> </el-table-column>
        <el-table-column prop="address" label="Operation">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-dialog title="重新分配工作" :visible.sync="dialogFormVisible">
              <el-form :model="form" ref="form" :rules="rules">
                <el-form-item
                  label="接手人"
                  prop="name"
                  :label-width="formLabelWidth"
                >
                  <el-select
                    v-model="form.name"
                    filterable
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in replacement"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="分配task" :label-width="formLabelWidth">
                  <el-select
                    v-model="form.tasks"
                    multiple
                    filterable
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in tasks"
                      :key="item.value"
                      :label="item.label"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="分配Leads" :label-width="formLabelWidth">
                  <el-select
                    v-model="form.leads"
                    multiple
                    filterable
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in leads"
                      :key="item.value"
                      :label="item.label"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item
                  label="分配contacts"
                  :label-width="formLabelWidth"
                >
                  <el-select
                    v-model="form.contacts"
                    multiple
                    filterable
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in contacts"
                      :key="item.value"
                      :label="item.label"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')"
                    >Save</el-button
                  >
                </el-form-item>
              </el-form>
              <el-table :data="ReplacementTable" border style="width: 100%">
                <el-table-column prop="name" label="接手人" width="180">
                </el-table-column>
                <el-table-column label="tasks" width="180">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.tasks }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="leads">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.leads }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="contacts">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{
                      scope.row.contacts
                    }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="address" label="操作">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="
                        deleteRow(scope.$index, ReplacementTable)
                      "
                      type="text"
                      size="small"
                    >
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      replacement: [
        {
          value: "选项1",
          label: "交接人1",
        },
        {
          value: "选项2",
          label: "交接人2",
        },
        {
          value: "选项3",
          label: "交接人3",
        },
        {
          value: "选项4",
          label: "交接人4",
        },
        {
          value: "选项5",
          label: "交接人5",
        },
      ],
      tasks: [
        {
          value: 1,
          label: "任务1",
        },
        {
          value: 2,
          label: "任务2",
        },
        {
          value: 3,
          label: "任务3",
        },
        {
          value: 4,
          label: "任务4",
        },
        {
          value: 5,
          label: "任务5",
        },
      ],
      leads: [
        {
          value: 1,
          label: "Leads1",
        },
        {
          value: 2,
          label: "Leads2",
        },
        {
          value: 3,
          label: "Leads3",
        },
        {
          value: 4,
          label: "Leads4",
        },
        {
          value: 5,
          label: "Leads5",
        },
      ],
      contacts: [
        {
          value: 1,
          label: "contact1",
        },
        {
          value: 2,
          label: "contact2",
        },
        {
          value: 3,
          label: "contact3",
        },
        {
          value: 4,
          label: "contact4",
        },
        {
          value: 5,
          label: "contact5",
        },
      ],

      dialogFormVisible: false,
      form: {
        name: "",
        tasks: [],
        leads: [],
        contacts: [],
      },
      formLabelWidth: "120px",
      rules: {
        name: [{ required: true, message: "请选择交接人", trigger: "change" }],
      },
      ReplacementTable: [],
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
      this.form = { name: "", tasks: [], leads: [], contacts: [] };
      this.dialogFormVisible = true;
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
#users {
  //   padding: 0 15px;
  position: absolute;
  left: $gap-width;
  @include border($px: 1px, $color: #2c3e50);
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
    border-bottom: 1px solid #2c3e50;
    // @include border($px: 1px, $color: #000000, $shape: solid, $radius: 0);
  }
  .users-table {
    // @include border($px: 1px, $color: #2c3e50);
  }
}
</style>