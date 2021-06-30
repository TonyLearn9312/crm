<template>
  <div class="Leads-details">
    <div class="activity">
      <header>
        <h3>Access</h3>
        <el-button type="primary" size="mini"> Add </el-button>
        <!-- <el-dialog
          :close-on-click-modal="false"
          width="400px"
          title="添加Group"
          center
          :visible.sync=""
        >
          <el-form
            :model="ruleForm"
            :rules="rules"
            label-position="top"
            label-width="100px"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item class="item-1" label="Group name">
              <el-input v-model="ruleForm.FirstName"></el-input>
            </el-form-item>
            <el-form-item class="item-2" label="Type">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.LeadOwner"
                placeholder="请选择"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-2" label="Region">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.LeadOwner"
                placeholder="请选择"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-2" label="Group Leader">
              <el-select v-model="ruleForm.leader" placeholder="请选择">
                <el-option
                  v-for="item in userlist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-2" label="Group Members">
              <el-select v-model="ruleForm.Members" placeholder="请选择">
                <el-option
                  v-for="item in userlist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addGroupDialog = false">取 消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >确 定</el-button
            >
          </div>
        </el-dialog> -->
      </header>
      <div class="Groups-list">
        <!-- <el-input v-model="searchKey" placeholder="请输入内容">
          <template slot="append">
            <span class="el-icon-search"></span>
          </template>
          ></el-input> -->
        <el-table :data="tableData" height="100%" border style="width: 100%">
          <el-table-column prop="date" label="编号"> </el-table-column>
          <el-table-column prop="BY" label="权限名称"> </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="mid-component">
      <div class="Formdata">
        <header>
          <h3>Access details</h3>
        </header>
        <div class="groups-members">
          <el-form
            label-position="top"
            class="form"
            :model="form"
            ref="form"
            :rules="rules"
          >
            <el-form-item
              label="权限名称"
              prop="name"
              :label-width="formLabelWidth"
            >
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item
              label="是否有权限访问全部用户"
              prop="tasks"
              :label-width="formLabelWidth"
            >
              <el-radio-group v-model="form.isHasAccess">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              v-if="form.isHasAccess===false"
              label="可以访问的国家"
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
                  v-if="form.isHasAccess===false"
              label="可以访问的客户"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      form: {
        name: "",
        isHasAccess: false,
        country: [],
        client: [],
      },
      formLabelWidth: "200px",
      tableData: [
        {
          date: "2016-05-03",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-02",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-02",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-01",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-02",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-01",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-02",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-01",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-02",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-04",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
        {
          date: "2016-05-01",
          content: "王小虎",
          BY: "KO-SALE-Tom",
          edit: false,
        },
      ],
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-table--group,
.el-table--border {
  //   border: 1px solid $BackgroundColor;
}
</style>
<style lang="scss" scoped>
.Leads-details {
  height: 100%;
  $Sidebar-width: 330px;
  $toolbar-height: 50px;
  .activity {
    -webkit-transition: -webkit-transform 0.5s;
    transition: 0.5s;
    position: absolute;
    font-size: 12px;
    left: 0;
    @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
    overflow: hidden;
    @include boxModel($width: $Sidebar-width, $height: 100%, $padding: 0);
    .Groups-list {
      // padding: 10px;
      height: calc(100% - 40px);
    }
  }
  .mid-component {
    -webkit-transition: -webkit-transform 0.5s;
    transition: 0.5s;
    position: absolute;
    $default-left: $gap-width * 2 + $Sidebar-width;
    left: $Sidebar-width + $gap-width;
    height: 100%;
    width: 1200px;
    .Formdata {
      height: 100%;
      @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
      overflow: hidden;
      header {
        display: flex;
        align-items: center;
        height: $header-hight;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid $BackgroundColor;
        h3 {
          padding-left: 20px;
        }
      }
    }
    .groups-members {
      height: calc(100% - 40px);
      padding: 20px;
      .groups-members-table {
        height: calc(100% - 40px);
      }
    }
  }

  .activity,
  .mid-component .saleNote,
  .mid-component .demoAccount {
    header {
      display: flex;
      align-items: center;
      @include boxModel(
        $width: 100%,
        $height: $header-hight,
        $background-color: $whiteBgColor
      );
      padding: 0 20px;
      justify-content: space-between;
      border-bottom: 1px solid $BackgroundColor;
      h3 {
        // padding-left: 20px;
      }
    }
  }
}
</style>