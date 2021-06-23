<template>
  <div class="Leads-details">
    <div
      class="activity"
      :class="{
        'sidebar-close': !sidebarSwitch,
        'sidebar-open': sidebarSwitch,
      }"
    >
      <header>
        <h3>Activity</h3>
      </header>
      <div class="toolbar">
        <!-- <el-select
          :popper-append-to-body="false"
          v-model="Activity"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select> -->
        <div :class="{ isactive: obj[0].isactive }" @click="toolbarFun(0)">
          Call
        </div>
        <div :class="{ isactive: obj[1].isactive }" @click="toolbarFun(1)">
          Activity
        </div>
        <div :class="{ isactive: obj[2].isactive }" @click="toolbarFun(2)">
          SMS
        </div>
        <div :class="{ isactive: obj[3].isactive }" @click="toolbarFun(3)">
          Update
        </div>
        <!-- <div :class="{ isactive: obj[4].isactive }" @click="toolbarFun(4)">
          Tasks
        </div> -->
      </div>
      <div class="activity-table">
        <el-table :data="tableData" height="100%" border style="width: 100%">
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                @click="
                  () => {
                    scope.row.edit = true;
                  }
                "
                >Edit</el-button
              >
              <!-- <el-button
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              > -->
            </template>
          </el-table-column>
          <el-table-column label="内容" width="130px">
            <template #default="scope">
              <el-popover effect="light" trigger="hover" placement="top">
                <template #default>
                  <s>姓名: {{ scope.row.content }}</s>
                  <p>姓名: {{ scope.row.content }}</p>
                  <s>住址: {{ scope.row.BY }}</s>
                  <p>住址: {{ scope.row.BY }}</p>
                </template>
                <template #reference>
                  <div class="name-wrapper">
                    <span size="medium" v-if="!scope.row.edit">{{
                      scope.row.content
                    }}</span>
                    <el-input
                      v-else-if="scope.row.edit"
                      @blur="
                        () => {
                          scope.row.edit = false;
                        }
                      "
                      v-model="scope.row.content"
                    ></el-input>
                  </div>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="Date"> </el-table-column>
          <el-table-column prop="BY" label="By"> </el-table-column>
        </el-table>
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
          <h3>Details</h3>
          <ul>
            <li @click="sidebarOpen">Activity</li>
            <li>Call</li>
            <li>SMS</li>
            <li>Email</li>
            <li @click="submitForm('ruleForm')">Save</li>
          </ul>
        </header>
        <div class="box">
          <el-form
            :model="ruleForm"
            :rules="rules"
            label-position="left"
            label-width="100px"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item label="First name">
              <el-input v-model="ruleForm.FirstName"></el-input>
            </el-form-item>
            <el-form-item label="Last name">
              <el-input v-model="ruleForm.LastName"></el-input>
            </el-form-item>
            <el-form-item class="DOB-title">
              <!-- <el-col :span="6">DOB</el-col> -->
              <!-- <el-col :span="8"> -->
              <el-form-item label="DOB">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.Dob"
                ></el-date-picker>
              </el-form-item>
              <!-- </el-col> -->
              <!-- <el-col :span="2">Title</el-col>
              <el-col :span="8"> -->
              <el-form-item class="Title" label="Title">
                <el-select
                  :popper-append-to-body="false"
                  v-model="ruleForm.title"
                  placeholder="请选择"
                >
                  <el-option label="Mr" value="shanghai"></el-option>
                  <el-option label="Miss" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <!-- </el-col> -->
            </el-form-item>
            <el-form-item label="Lead owner">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.LeadOwner"
                placeholder="请选择"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="Email" label="Email">
              <el-form-item prop="Email1">
                <el-input v-model="ruleForm.Email1"></el-input>
              </el-form-item>
              <el-form-item prop="Email2">
                <el-input v-model="ruleForm.Email2"></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item class="Mobile" label="Mobile">
              <el-form-item prop="type">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item prop="type">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item label="languange">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.languange"
                placeholder="请选择"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Country">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.Country"
                placeholder="请选择"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="BY" prop="type">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Local time" prop="type">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.LocalTime"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="Sale team">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.Saleteam"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Regulation" prop="delivery">
              <el-input v-model="ruleForm.Regulation"></el-input>
            </el-form-item>
            <el-form-item label="LeadSource">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.LeadSource"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Lead status" prop="type">
              <el-select
                :popper-append-to-body="false"
                v-model="ruleForm.LeadStatus"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Timeassigned" prop="type">
              <div style="width: 200px">sdfdsf</div>
            </el-form-item>
            <el-form-item label="Timer" prop="type">
              <div style="width: 200px">sdfdsf</div>
            </el-form-item>
            <el-form-item label="Inquiry" prop="type">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入"
                v-model="ruleForm.Inquiry"
              ></el-input>
            </el-form-item>
            <el-form-item label="Attachment" prop="type">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <template #tip>
                  <div class="el-upload__tip">
                    只能上传 jpg/png 文件，且不超过 500kb
                  </div>
                </template>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="saleNote">
        <header>
          <h3>Sale Notes</h3>
        </header>
        <div class="box">
          <el-form
            :model="SaleNoteForm"
            :rules="rules"
            label-position="left"
            :inline="true"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item class="item-1" label="Interest">
              <el-select
                v-model="SaleNoteForm.Interest"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-2" label="Trading Level">
              <el-select
                v-model="SaleNoteForm.tradingLevel"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-3" label="Call back">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="SaleNoteForm.callback"
              ></el-date-picker>
            </el-form-item>
            <el-form-item class="item-4" label="Favo">
              <el-select
                v-model="SaleNoteForm.favo"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-5" label="Status">
              <el-select
                v-model="SaleNoteForm.status"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-6" label="bestContactTime">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="SaleNoteForm.bestContactTime"
              ></el-date-picker>
            </el-form-item>
            <el-form-item class="item-7" label="Note">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入"
                v-model="SaleNoteForm.note"
              ></el-input>
            </el-form-item>

            <el-form-item class="item-8" label="expectedDeposit">
              <el-input v-model="SaleNoteForm.expectedDeposit"></el-input>
            </el-form-item>
            <el-form-item class="item-9" label="lastModified">
              <div>{{ SaleNoteForm.lastModified }}</div>
            </el-form-item>
            <el-form-item class="item-10" label="checkbox">
              <el-checkbox-group v-model="SaleNoteForm.checkbox">
                <el-checkbox label="MT4"></el-checkbox>
                <el-checkbox label="MT5"></el-checkbox>
                <el-checkbox label="Iress"></el-checkbox>
                <el-checkbox label="EA"></el-checkbox>
                <el-checkbox label="No MKT email"></el-checkbox>
                <el-checkbox label="No sale call"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="demoAccount">
        <header>
          <h3>Demo account</h3>
        </header>
        <div class="box">
          <el-table :data="tableData" height="100%" border style="width: 100%">
            <el-table-column prop="date" label="NO."> </el-table-column>
            <el-table-column prop="name" label="Server"> </el-table-column>
            <el-table-column prop="BY" label="Type"> </el-table-column>
            <el-table-column prop="BY" label="Status"> </el-table-column>
            <el-table-column prop="BY" label="Currency"> </el-table-column>
            <el-table-column prop="BY" label="Equity"> </el-table-column>
            <el-table-column prop="BY" label="NET"> </el-table-column>
            <el-table-column prop="BY" label="Last login"> </el-table-column>
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
      sidebarSwitch: true,
      Activity: "",
      obj: [
        { isactive: false },
        { isactive: false },
        { isactive: false },
        { isactive: false },
        { isactive: false },
      ],
      SaleNoteForm: {
        interest: "",
        callback: "",
        status: "",
        note: "",
        tradingLevel: "",
        favo: "",
        bestContactTime: "",
        expectedDeposit: "",
        lastModified: "",
        checkbox: [],
      },
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
      ruleForm: {
        FirstName: "",
        LastName: "",
        LeadOwner: "",
        Country: "",
        Dob: "",
        title: "",
        Email1: "",
        Email2: "",
        languange: "",
        LocalTime: "",
        Saleteam: "",
        Regulation: "",
        LeadSource: "",
        LeadStatus: "",
        Inquiry: "",
      },
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
    };
  },
  methods: {
    sidebarOpen() {
      this.sidebarSwitch = !this.sidebarSwitch;
    },
    toolbarFun(num) {
      this.obj.forEach((item) => {
        item.isactive = false;
      });
      this.obj[num].isactive = !this.obj[num].isactive;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      window.open(file.url);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      console.log(fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
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
<style lang="scss" >
.Leads-details {
  .el-input__inner {
    width: 100%;
  }
  .el-button {
    padding: 5px 10px;
  }
  .DOB-title {
    width: 350px;
    .el-form-item__content:nth-of-type(1) {
      width: 100%;
      margin-left: 0 !important;
      display: flex;
      justify-content: space-between;
      .el-form-item {
        // flex: 1;
        margin-bottom: 0;
        .el-form-item__label {
          // padding-right: 0px;
        }
        // width: 175px;
        .el-form-item__content {
          width: 130px;
          display: inline-block;
          margin-left: 0 !important;
          .el-form-item__error {
            // width: 125px;
          }
        }
      }
      .el-form-item.Title {
        .el-form-item__label {
          width: 40px !important;
          text-align: center;
        }
        .el-form-item__content {
          width: 80px;
          display: inline-block;
          margin-left: 0 !important;
          .el-form-item__error {
            // width: 125px;
          }
        }
      }
      .el-form-item:first-child {
        //    margin-right: 10px;
      }
      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        // width: 125px;
        width: 100%;
      }
    }
    .el-input__inner {
      // width: 125px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
<style lang="scss" scoped>
.Leads-details {
  $toolbar-height: 50px;
  .activity {
    -webkit-transition: -webkit-transform 0.5s;
    transition: 0.5s;
    position: absolute;
    font-size: 12px;
    @include border($px: 1px, $color: $BackgroundColor);
    @include boxModel(
      $width: $Sidebar-width,
      $height: calc(100% - #{$offset-bottom}),
      $padding: 0
    );
    .toolbar {
      height: $toolbar-height;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 20px;
      > div {
        height: 30px;
        padding: 0 10px;
        cursor: pointer;
        line-height: 30px;
        margin-right: 10px;
        @include border(
          $px: 1px,
          $color: $BackgroundColor,
          $shape: solid,
          $radius: 5px
        );
      }
    }
    .activity-table {
      height: calc(100% - #{$header-hight} - #{$toolbar-height});
    }
    .isactive {
      color: $whiteBgColor;
      background: $BackgroundColor;
    }
  }
  .activity.sidebar-close {
    left: -$Sidebar-width;
  }
  .activity.sidebar-open {
    left: $gap-width;
  }

  .mid-component {
    -webkit-transition: -webkit-transform 0.5s;
    transition: 0.5s;
    position: absolute;
    $default-left: $gap-width * 2 + $Sidebar-width;
    left: $default-left;
    height: calc(100% - 30px);
    .Formdata {
      height: 40%;
      margin-bottom: $gap-width;
      @include border($px: 1px, $color: $BackgroundColor);
      .el-form {
        display: grid;
        grid-template-columns: repeat(2, auto);
      }
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
        ul {
          display: flex;
          li {
            padding: 0 10px;
            cursor: pointer;
            line-height: 30px;
            margin-right: 20px;
            height: 30px;
            @include border(
              $px: 1px,
              $color: #dcdfe6,
              $shape: solid,
              $radius: 5px
            );
          }
        }
      }
      .box {
        padding: 10px;
        height: calc(100% - #{$header-hight});
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
    .saleNote {
      margin-bottom: $gap-width;
      height: 30%;
      @include border($px: 1px, $color: $BackgroundColor);
      .box {
        padding: 10px;
        height: calc(100% - #{$header-hight});
        overflow-y: auto;
        overflow-x: hidden;
      }
      .el-form {
        display: grid;
        grid-template-columns: repeat(2, auto);
        // grid-template-areas:
        //   "a b"
        //   "c d"
        //   "e f"
        //   "g h"
        //   "g j"
        //   "g l";
        .item-7 {
          grid-row-start:4;
          grid-row-end: 8;
        }
        // grid-auto-flow: row;
      }
    }
    .demoAccount {
      height: calc(100% - 40% - 30% - #{$gap-width} * 2);
      @include border($px: 1px, $color: $BackgroundColor);
      .box {
        height: calc(100% - #{$header-hight});
      }
    }
  }
  .mid-component.sidebar-open {
    width: $main-width;
    left: $gap-width * 2 + $Sidebar-width;
    .Formdata .el-form {
      grid-template-columns: repeat(2, auto);
    }
  }
  .mid-component.sidebar-close {
    width: $main-width + $gap-width + $Sidebar-width;
    left: $gap-width;
    .Formdata .el-form {
      grid-template-columns: repeat(4, auto);
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
      border-bottom: 1px solid $BackgroundColor;
      h3 {
        padding-left: 20px;
      }
    }
  }
}
</style>