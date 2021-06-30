<template>
  <div class="profile">
    <profile-submoudle></profile-submoudle>
    <crm-profile></crm-profile>
    <!-- <div class="demoAccount">
        <header>
          <h3>Demo account</h3>
        </header>
        <div class="box"></div>
      </div> -->
  </div>
</template>
<script>
import CrmProfile from "./CrmProfile.vue";
import ProfileSubmoudle from "./ProfileSubmoudle.vue";
export default {
  components: {
    CrmProfile,
    ProfileSubmoudle,
    // LeadsDetailsComponent,
    // SaleNote,
    // Activity,
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
.profile {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 300px auto;
  grid-row-gap: 15px;
  .ProfileSubmoudle {
    @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
  }
  .CrmProfile {
    @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
  }
  //   .mid-component {
  //     -webkit-transition: -webkit-transform 0.5s;
  //     transition: 0.5s;
  //     height: 100%;
  //     width: 100%;
  //     .demoAccount {
  //       height: 100%;
  //       width: 100%;
  //       @include border($px: 1px, $color: $BackgroundColor, $radius: 4px);
  //       overflow: hidden;
  //       header {
  //         display: flex;
  //         align-items: center;
  //         @include boxModel(
  //           $width: 100%,
  //           $height: $header-hight,
  //           $background-color: $whiteBgColor
  //         );
  //         border-bottom: 1px solid $BackgroundColor;
  //         h3 {
  //           padding-left: 20px;
  //         }
  //       }
  //       .box {
  //         height: 100%;
  //       }
  //     }
  //   }
}
</style>