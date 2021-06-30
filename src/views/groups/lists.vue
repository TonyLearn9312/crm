<template>
  <div class="Leads-details">
    <div class="activity">
      <header>
        <h3>Groups</h3>
        <el-button
          type="primary"
          v-if="roletype === 1"
          size="mini"
          @click="addGroupDialog = true"
        >
          Add
        </el-button>
        <el-dialog
          :close-on-click-modal="false"
          width="400px"
          title="添加Group"
          center
          :visible.sync="addGroupDialog"
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
        </el-dialog>
      </header>
      <div class="Groups-list">
        <div class="custom-tree-container">
          <div class="block">
            <el-tree
              :data="data"
              node-key="id"
              default-expand-all
              :expand-on-click-node="false"
            >
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                <span>
                  <span
                    v-if="data.type == 'g' && roletype === 1"
                    class="el-icon-edit"
                    @click="addGroupDialog = true"
                  ></span>
                  <el-popover
                    :ref="`popover8-${data.id}`"
                    placement="top"
                    width="160"
                    trigger="click"
                  >
                    <p>这是一段内容这是一段内容确定删除吗？</p>
                    <div style="text-align: right; margin: 0">
                      <el-button
                        size="mini"
                        type="text"
                        @click="visible = false"
                        >取消</el-button
                      >
                      <el-button
                        type="primary"
                        size="mini"
                        @click="group_popover(data.id)"
                        >确定</el-button
                      >
                    </div>
                    <span
                      slot="reference"
                      v-if="data.type == 'g' && roletype === 1"
                      class="el-icon-close"
                    ></span>
                  </el-popover>
                </span>
              </span>
            </el-tree>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mid-component"
      :class="{
        'sidebar-close': !sidebarSwitch,
        'sidebar-open': sidebarSwitch,
      }"
    >
      <div class="Formdata">
        <header>
          <h3>Groups members</h3>
        </header>
        <div class="groups-members">
          <div class="groups-members-table">
            <el-table
              :data="
                tableData.slice(
                  (currentpage - 1) * pagesize,
                  currentpage * pagesize
                )
              "
              border
              height="100%"
              style="width: 100%"
            >
              <el-table-column prop="date" label="工号"> </el-table-column>
              <el-table-column label="Name">
                <template slot-scope="scope">
                  <u @click="$routerto('profile')">{{ scope.row.name }}</u>
                </template>
              </el-table-column>
              <el-table-column prop="title" label="Title"> </el-table-column>
              <el-table-column prop="role" label="Group role">
              </el-table-column>
              <el-table-column v-if="roletype === 1" label="Operaion">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >Edit</el-button
                  >
                  <el-popover
                    :ref="`popover1-${scope.$index}`"
                    placement="top"
                    width="160"
                    trigger="click"
                  >
                    <p>这是一段内容这是一段内容确定删除吗？</p>
                    <div style="text-align: right; margin: 0">
                      <el-button
                        size="mini"
                        type="text"
                        @click="visible = false"
                        >取消</el-button
                      >
                      <el-button
                        type="primary"
                        size="mini"
                        @click="handleDelete(scope.$index, scope.row.Color)"
                        >确定</el-button
                      >
                    </div>
                    <el-button slot="reference" size="mini">Delete</el-button>
                  </el-popover>
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
      </div>
    </div>
  </div>
</template>

<script>
let id = 1000;
export default {
  data() {
    return {
      roletype: 1,
      visible: false,
      currentpage: 1,
      pagesize: 13,
      data: [
        {
          id: 1,
          type: "c",
          label: "悉尼",
          children: [
            {
              id: 4,
              type: "g",
              label: "客户组",
            },
          ],
        },
        {
          id: 2,
          type: "c",
          label: "韩国",
          children: [
            {
              id: 5,
              type: "g",
              label: "客服组",
            },
            {
              id: 6,
              type: "g",
              label: "销售组",
            },
          ],
        },
        {
          id: 3,
          type: "c",
          label: "越南",
          children: [
            {
              id: 5,
              type: "g",
              label: "客服组",
            },
            {
              id: 6,
              type: "g",
              label: "销售组",
            },
          ],
        },
        {
          id: 4,
          type: "c",
          label: "泰国",
          children: [
            {
              id: 5,
              type: "g",
              label: "客服组",
            },
            {
              id: 6,
              type: "g",
              label: "销售组",
            },
          ],
        },
      ],
      tableData: [
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
        {
          date: "KO-SALE-10058",
          name: "王小虎",
          title: "Saler",
          role: "members",
        },
      ],
      ruleForm: {
        FirstName: "tom",
        LastName: "jdo",
        LeadOwner: "Tom",
        Country: "US",
        leader: "",
        Members: [],
      },
      userlist: [],
      rules: {
        Email1: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        Email2: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
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
            // required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      addGroupDialog: false,
      //   data: JSON.parse(JSON.stringify(data)),
      swtich: true,
      sidebarSwitch: true,
    };
  },
  methods: {
    group_popover(index) {
      console.log(this.$refs[`popover8-${index}`].doClose);
      this.$refs[`popover8-${index}`].doClose();
    },
    handleDelete(index) {
      console.log(this.$refs[`popover1-${index}`]);
      this.$refs[`popover1-${index}`].doClose();
      // row.access = row.selectAccess;
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
      // 具体需要执行的逻辑, 我还不是很会回调的写法, 所以就直接这样完成具体逻辑
      // console.log("删除" + id);
      //   this.visible = false;
    },
    fromchildren(data) {
      this.currentpage = data.currentpage;
      //   this.changepage(data.currentpage, data.pagesize);
    },
    append(data) {
      const newChild = { id: id++, type: "g", label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    handleCommand(command) {
      // this.$message("click on item " + command);
      this.ruleForm.Regulation = command;
    },
    sidebarOpen() {
      this.sidebarSwitch = !this.sidebarSwitch;
    },
    toolbarFun(num) {
      this.obj.forEach((item) => {
        item.isactive = false;
      });
      this.obj[num].isactive = !this.obj[num].isactive;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //   alert("submit!");
          const newChild = {
            id: id++,
            type: "g",
            label: "testtest",
            children: [],
          };
          console.log(this.data, newChild);
          //   this.data.children.push(newChild);
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
      padding: 10px 0;
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