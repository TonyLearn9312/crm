<template>
  <div id="delete-popover">
    <el-button size="mini" style="margin-right:10px" @click="handleEdit(row)">编辑</el-button>
    <el-dialog
      :close-on-click-modal="false"
      title="重新分配工作"
      :visible.sync="dialogFormVisible"
      class="dialog-popover"
    >
      <el-form class="form" :model="form" ref="form" :rules="rules">
        <el-form-item label="接手人" prop="name" :label-width="formLabelWidth">
          <el-select v-model="form.name" filterable placeholder="请选择">
            <el-option
              v-for="item in replacement"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="分配task"
          prop="tasks"
          :label-width="formLabelWidth"
        >
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
        <el-form-item
          label="分配Leads"
          prop="leads"
          :label-width="formLabelWidth"
        >
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
          prop="contacts"
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
        <el-form-item label="" class="" :label-width="formLabelWidth">
          <el-button type="primary" size="mini" @click="resetForm('form')"
            >Reset</el-button
          >
          <el-button type="primary" size="mini" @click="onSubmit('form')"
            >Save</el-button
          >
        </el-form-item>
      </el-form>
      <el-table :data="ReplacementTable" border style="width: 100%">
        <el-table-column prop="name" label="接手人" width="180">
        </el-table-column>
        <el-table-column label="tasks" width="180">
          <template slot-scope="scope">
            <span v-for="item in scope.row.tasks" :key="item.value">{{
              item.label
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="leads">
          <template slot-scope="scope">
            <span v-for="item in scope.row.leads" :key="item.value">{{
              item.label
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="contacts">
          <template slot-scope="scope">
            <span v-for="item in scope.row.contacts" :key="item.value">{{
              item.label
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, ReplacementTable)"
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
    <el-button size="mini" type="danger" v-popover:popover5>删除</el-button>
    <el-popover
      popper-class="access-popper"
      :popper-options="{ boundariesElement: 'body' }"
      ref="popover5"
      placement="top"
      width="100"
      v-model="visible"
    >
      <p>确定删除吗</p>
      <div >
        <el-button size="mini" type="text" @click="visible = false"
          >取消</el-button
        >
        <el-button type="danger" size="mini" @click="deleteItem(row)"
          >确定</el-button
        >
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
  // 组件名称, 在外部可以使用<delete-confirm-popover></delete-confirm-popover>来使用组件
  name: "delete-confirm-popover",
  // 组件的属性, 可以从外部传入相应的值进来
  props: ["content", "id", "row", "access"],
  data: function () {
    return {
      input: "",
      leads: [
        {
          value: 0,
          label: "交接人1",
        },
        {
          value: 1,
          label: "交接人2",
        },
        {
          value: 2,
          label: "交接人3",
        },
        {
          value: 3,
          label: "交接人4",
        },
        {
          value: 4,
          label: "交接人5",
        },
      ],
      contacts: [
        {
          value: 0,
          label: "交接人1",
        },
        {
          value: 1,
          label: "交接人2",
        },
        {
          value: 2,
          label: "交接人3",
        },
        {
          value: 3,
          label: "交接人4",
        },
        {
          value: 4,
          label: "交接人5",
        },
      ],
      tasks: [
        {
          value: 0,
          label: "交接人1",
        },
        {
          value: 1,
          label: "交接人2",
        },
        {
          value: 2,
          label: "交接人3",
        },
        {
          value: 3,
          label: "交接人4",
        },
        {
          value: 4,
          label: "交接人5",
        },
      ],
      ReplacementTable: [],
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
      dialogFormVisible: false,
      formLabelWidth: "100px",
      visible: false,
      form: {
        name: "",
        tasks: [],
        leads: [],
        contacts: [],
      },
      rules: {
        name: [{ required: true, message: "请选择交接人", trigger: "change" }],
      },
    };
  },
  created() {
    console.log(this.tasks);
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
          this.form = {
            name: this.form.name,
            tasks: [],
            leads: [],
            contacts: [],
          };
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deleteRow(index, rows) {
      console.log(index, rows);
      this.contacts.push(...rows[index].contacts);
      this.contacts.sort((a, b) => a.value - b.value);
      this.tasks.push(...rows[index].tasks);
      this.tasks.sort((a, b) => a.value - b.value);
      this.leads.push(...rows[index].leads);
      this.leads.sort((a, b) => a.value - b.value);
      rows.splice(index, 1);
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.form = { name: "", tasks: [], leads: [], contacts: [] };
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
      // row.splice(index, 1);
    },
    deleteItem(id) {
      // 具体需要执行的逻辑, 我还不是很会回调的写法, 所以就直接这样完成具体逻辑
      console.log("删除" + id);
      this.visible = false;
    },
  },
};
</script>
<style lang="scss">
#delete-popover {
  .el-form-item__content {
    width: 300px;
  }
  .el-input__inner {
    width: 300px;
  }
  .dialog-popover {
    .form {
      text-align: left;
    }
  }
  .el-checkbox-group {
    display: flex;
    height: 120px;
    padding: 10px 0;
    overflow-y: auto;
    flex-direction: column;
  }
}
</style>