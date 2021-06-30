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
      <activity class="activity-table"></activity>
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
            <li @click="swtich = !swtich">Edit</li>
            <li @click="submitForm('ruleForm')">Save</li>
          </ul>
        </header>
        <leads-details-component
          :sidebarSwitch="sidebarSwitch"
          :editSwitch="swtich"
        ></leads-details-component>
      </div>
      <div class="saleNote">
        <header>
          <h3>Sale Notes</h3>
        </header>
        <sale-note
          :sidebarSwitch="sidebarSwitch"
          :editSwitch="swtich"
        ></sale-note>
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
import LeadsDetailsComponent from "../Leads/details_component.vue";
import SaleNote from "../Leads/saleNote.vue";
import Activity from "../Leads/activity.vue";
export default {
  components: {
    LeadsDetailsComponent,
    SaleNote,
    Activity,
  },
  data() {
    return {
      swtich: true,
      sidebarSwitch: true,
      Activity: "",
      obj: [
        { isactive: false },
        { isactive: false },
        { isactive: false },
        { isactive: false },
        { isactive: false },
      ],
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
        Inquiry:
          "dsfdsffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      },
    };
  },
  methods: {
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
<style lang="scss" scoped>
.Leads-details {
  $toolbar-height: 50px;
  height: 100%;
  .activity {
    -webkit-transition: -webkit-transform 0.5s;
    transition: 0.5s;
    position: absolute;
    font-size: 12px;
    @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
    overflow: hidden;
    @include boxModel(
      $width: $Sidebar-width,
      $height: 100%,
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
    left: - ($Sidebar-width+ $gap-width);
  }
  .activity.sidebar-open {
    left: 0;
  }
  .mid-component {
    -webkit-transition: -webkit-transform 0.5s;
    transition: 0.5s;
    position: absolute;
    $default-left: $gap-width  + $Sidebar-width;
    left: $default-left;
    height: 100%;
    .Formdata {
      height: 38%;
      margin-bottom: $gap-width;
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
    }
    .saleNote {
      margin-bottom: $gap-width;
      height: 32%;
      @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
      overflow: hidden;
    }
    .demoAccount {
      height: calc(100% - 70% - #{$gap-width} * 2);
      @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
      overflow: hidden;
      .box {
        height: calc(100% - #{$header-hight});
      }
    }
  }
  .mid-component.sidebar-open {
    width: $main-width;
    left: $gap-width  + $Sidebar-width;
  }
  .mid-component.sidebar-close {
    width: $main-width + $gap-width + $Sidebar-width;
    left: 0;
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