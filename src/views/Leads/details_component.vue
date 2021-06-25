<template>
  <div class="leads-datails-component">
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-position="left"
      label-width="100px"
      ref="ruleForm"
      :class="{
        'sidebar-close': !sidebarSwitch,
        'sidebar-open': sidebarSwitch,
      }"
      class="demo-ruleForm"
    >
      <el-form-item class="item-1" label="First name">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.FirstName }}
        </div>
        <el-input v-if="!editSwitch" v-model="ruleForm.FirstName"></el-input>
      </el-form-item>
      <el-form-item class="item-2" label="Lead owner">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.LeadOwner }}
        </div>
        <el-select
          v-if="!editSwitch"
          :popper-append-to-body="false"
          v-model="ruleForm.LeadOwner"
          placeholder="请选择"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-3" label="Last name">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.LastName }}
        </div>
        <el-input v-if="!editSwitch" v-model="ruleForm.LastName"></el-input>
      </el-form-item>
      <el-form-item class="item-4" label="Sale team">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.Saleteam }}
        </div>
        <el-select
          v-if="!editSwitch"
          :popper-append-to-body="false"
          v-model="ruleForm.Saleteam"
          placeholder="请选择活动区域"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-5 DOB-title">
        <el-form-item label="DOB">
          <div v-if="editSwitch" class="only-read">
            {{ ruleForm.Dob }}
          </div>
          <el-date-picker
            v-if="!editSwitch"
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.Dob"
          ></el-date-picker>
        </el-form-item>
        <el-form-item class="Title" label="Title">
          <div v-if="editSwitch" class="only-read">
            {{ ruleForm.title }}
          </div>
          <el-select
            v-if="!editSwitch"
            :popper-append-to-body="false"
            v-model="ruleForm.title"
            placeholder="请选择"
          >
            <el-option label="Mr" value="shanghai"></el-option>
            <el-option label="Miss" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form-item>
      <el-form-item class="item-6" label="LeadSource">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.LeadSource }}
        </div>
        <el-select
          v-if="!editSwitch"
          :popper-append-to-body="false"
          v-model="ruleForm.LeadSource"
          placeholder="请选择活动区域"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-7 email-regulation" prop="Email1" label="Email">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.Email1 }}
        </div>
        <el-input
          v-if="!editSwitch"
          placeholder="请输入"
          v-model="ruleForm.Email1"
        >
          <el-select
            v-model="ruleForm.Regulation"
            slot="append"
            placeholder="Regulation"
          >
            <el-option label="XX银监会" value="1"></el-option>
            <el-option label="XX银监会" value="2"></el-option>
            <el-option label="XX银监会" value="3"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item class="item-8 email-regulation" label="Email">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.Email2 }}
        </div>
        <el-input
          v-if="!editSwitch"
          placeholder="请输入"
          v-model="ruleForm.Email2"
        >
          <el-select
            v-model="ruleForm.Regulation"
            slot="append"
            placeholder="Regulation"
          >
            <el-option label="XX银监会" value="1"></el-option>
            <el-option label="XX银监会" value="2"></el-option>
            <el-option label="XX银监会" value="3"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item class="Mobile item-9" label="Mobile">
        <el-form-item prop="type">
          <div v-if="editSwitch" class="only-read">
            {{ ruleForm.Mobile }}
          </div>
          <el-input v-if="!editSwitch" v-model="ruleForm.Mobile">
            <el-select
              v-model="ruleForm.Regulation"
              slot="prepend"
              placeholder="Regulation"
            >
              <el-option label="+26" value="1"></el-option>
              <el-option label="+86" value="2"></el-option>
              <el-option label="+09" value="3"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item prop="type">
          <div v-if="editSwitch" class="only-read">
            {{ ruleForm.Mobile }}
          </div>
          <el-input v-if="!editSwitch" v-model="ruleForm.name">
            <el-select
              v-model="ruleForm.Regulation"
              slot="prepend"
              placeholder="Regulation"
            >
              <el-option label="XX银监会" value="1"></el-option>
              <el-option label="XX银监会" value="2"></el-option>
              <el-option label="XX银监会" value="3"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item class="item-10" label="Lead status" prop="type">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.LeadStatus }}
        </div>
        <el-select
          v-if="!editSwitch"
          :popper-append-to-body="false"
          v-model="ruleForm.LeadStatus"
          placeholder="请选择活动区域"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-11" label="Timeassigned" prop="type">
        <div class="only-read">sdfdsf</div>
      </el-form-item>
      <el-form-item class="lan-country item-12">
        <el-form-item label="Language">
          <div v-if="editSwitch" class="only-read">
            {{ ruleForm.title }}
          </div>
          <el-select
            v-if="!editSwitch"
            :popper-append-to-body="false"
            v-model="ruleForm.title"
            placeholder="请选择"
          >
            <el-option label="Mr" value="shanghai"></el-option>
            <el-option label="Miss" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="Title" label="Country">
          <div v-if="editSwitch" class="only-read">
            {{ ruleForm.title }}
          </div>
          <el-select
            v-if="!editSwitch"
            :popper-append-to-body="false"
            v-model="ruleForm.title"
            placeholder="请选择"
          >
            <el-option label="Mr" value="shanghai"></el-option>
            <el-option label="Miss" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form-item>
      <el-form-item class="item-13" label="Timer" prop="type">
        <div class="only-read">sdfdsf</div>
      </el-form-item>
      <el-form-item class="item-14 address" label="Address" prop="type">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.Address }}
        </div>
        <el-input v-if="!editSwitch" v-model="ruleForm.Address"></el-input>
      </el-form-item>
      <el-form-item class="item-15" label="Inquiry" prop="type">
        <div v-if="editSwitch" class="inquiry">
          {{ ruleForm.Inquiry }}
        </div>
        <el-input
          v-if="!editSwitch"
          :disabled="editSwitch"
          type="textarea"
          :rows="9"
          placeholder="请输入"
          v-model="ruleForm.Inquiry"
        ></el-input>
      </el-form-item>
      <el-form-item class="item-16" label="Local time" prop="type">
        <div v-if="editSwitch" class="only-read">
          {{ ruleForm.LocalTime }}
        </div>
        <el-date-picker
          v-if="!editSwitch"
          type="date"
          placeholder="选择日期"
          v-model="ruleForm.LocalTime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item class="item-17" label="Attachment" prop="type">
        <el-upload
          :disabled="editSwitch"
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
          <el-button v-if="!editSwitch" size="small" type="primary"
            >点击上传</el-button
          >
          <template v-if="!editSwitch" #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["sidebarSwitch", "editSwitch"],
  data() {
    return {
      ruleForm: {
        FirstName: "tom",
        LastName: "jdo",
        LeadOwner: "Tom",
        Country: "US",
        Mobile: "456456897",
        Dob: "06/03/1995",
        title: "Miss",
        Address: "xxXXXXXXXXXXX XXXXXXXx DFDSF DSFDSF DSFDSF SDFDSFDSF ",
        Email1: "454@gmail.com",
        Email2: "54564@gmail.com",
        languange: "En",
        LocalTime: "06:05:05",
        Saleteam: "KO-Sale",
        Regulation: "XXX",
        LeadSource: "IB",
        LeadStatus: "Open",
        Inquiry: "",
      },
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
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeRemove(file, fileList) {
      console.log(fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
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
  },
};
</script>
<style lang="scss">
.leads-datails-component {
  padding: 10px;
  height: calc(100% - #{$header-hight});
  overflow-y: auto;
  overflow-x: hidden;
  .el-input__inner {
    width: 100%;
  }
  .el-form.sidebar-open {
    grid-template-columns: repeat(2, auto);
    .item-9 {
      grid-row-start: 5;
      grid-row-end: 7;
    }
    .item-15 {
      grid-row-start: 8;
      grid-column-start: 2;
      grid-row-end: 12;
    }
  }
  .el-form.sidebar-close {
    grid-template-columns: repeat(4, auto);
    .item-2 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .item-3 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .item-5 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .item-7 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    .item-8 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 5;
      grid-row-end: 6;
    }

    .item-9 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 6;
      grid-row-end: 8;
    }
    .item-11 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 6;
      // grid-column-start: 4;
    }
    .item-12 {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-column-end: 3;
      // grid-column-start: 4;
    }
    .item-13 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 7;
      grid-row-end: 8;
      // grid-column-start: 4;
    }
    .item-4 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      // grid-column-start: 4;
    }
    .item-6 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      // grid-column-start: 4;
    }
    .item-10 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      // grid-column-start: 4;
    }
    .item-16 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 5;
      // grid-column-start: 4;
    }
    .item-14 {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .item-15 {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 3;
      // grid-column-start: 2;
      grid-row-end: 9;
    }
    .item-17 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 9;
    }
  }
  .el-form {
    display: grid;
    .DOB-title {
      width: 370px;
      .el-form-item__content:nth-of-type(1) {
        width: 100%;
        margin-left: 0 !important;
        display: flex;
        .el-form-item {
          margin-bottom: 0;
          line-height: 0;
          .el-form-item__content {
            width: 130px;
            display: inline-block;
            margin-left: 0 !important;
          }
        }
        .el-form-item.Title {
          .el-form-item__label {
            width: 40px !important;
            text-align: center;
          }
          .el-form-item__content {
            width: 100px;
            display: inline-block;
            margin-left: 0 !important;
          }
        }
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner {
          width: 100%;
        }
      }
    }
    .lan-country {
      width: 370px;
      .el-form-item__content:nth-of-type(1) {
        width: 100%;
        margin-left: 0 !important;
        display: flex;
        .el-form-item {
          line-height: 0;
          margin-bottom: 0;
          .el-form-item__label {
          }
          .el-form-item__content {
            width: 90px;
            display: inline-block;
            margin-left: 0 !important;
            line-height: 12px;
            .el-form-item__error {
            }
          }
        }
        .el-form-item.Title {
          .el-form-item__label {
            width: 80px !important;
            text-align: center;
          }
          .el-form-item__content {
            width: 100px;
            display: inline-block;
            margin-left: 0 !important;
          }
        }
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner {
          width: 100%;
        }
      }
    }
    .el-upload-list__item {
      font-size: 12px;
    }
    .only-read {
      line-height: 30px;
      min-height: 30px;
      border-bottom: 1px solid $border-color;
    }
    .address {
      .only-read {
        line-height: 20px;
      }
    }
    .Mobile {
      .el-select .el-input {
        width: 70px;
      }
      .input-with-select .el-input-group__prepend {
        background-color: #fff;
      }
      .el-form-item__content {
        //   line-height: 0;
        .el-form-item:first-child {
          margin-bottom: 5px;
        }
      }
    }
    .email-regulation {
      .el-select .el-input {
        width: 110px;
      }
      .input-with-select .el-input-group__prepend {
        background-color: #fff;
      }
    }
    .inquiry {
      padding: 5px;
      overflow-y: auto;
      height: 150px;
      @include border(
        $px: 1px,
        $color: $border-color,
        $shape: solid,
        $radius: 4px
      );
    }
  }
}
</style>
