<template>
  <div class="salenote-component">
    <el-form
      :model="SaleNoteForm"
      :rules="rules"
      label-position="left"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :class="{
        'sidebar-close': !sidebarSwitch,
        'sidebar-open': sidebarSwitch,
      }"
    >
      <el-form-item class="item-1" label="Interest">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.Interest }}
        </div>
        <el-select
          v-if="!editSwitch"
          v-model="SaleNoteForm.Interest"
          placeholder="请选择"
        >
          <el-option label="High" value="High"></el-option>
          <el-option label="Medium" value="Medium"></el-option>
          <el-option label="Low" value="Low"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-2" label="Trading Level">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.tradingLevel }}
        </div>
        <el-select
          v-if="!editSwitch"
          v-model="SaleNoteForm.tradingLevel"
          placeholder="请选择"
        >
          <el-option label="新手" value="shanghai"></el-option>
          <el-option label="熟悉" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-3" label="Call back">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.callback }}
        </div>
        <el-date-picker
          type="date"
          v-if="!editSwitch"
          placeholder="选择日期"
          v-model="SaleNoteForm.callback"
        ></el-date-picker>
      </el-form-item>
      <el-form-item class="item-4" label="Favo">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.favo }}
        </div>
        <el-select
          v-if="!editSwitch"
          v-model="SaleNoteForm.favo"
          placeholder="请选择"
        >
          <el-option label="美国股票" value="shanghai"></el-option>
          <el-option label="英国股票" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-5" label="Status">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.status }}
        </div>
        <el-select
          v-if="!editSwitch"
          v-model="SaleNoteForm.status"
          placeholder="请选择"
        >
          <el-option label="Open" value="shanghai"></el-option>
          <!-- <el-option label="区域二" value="beijing"></el-option> -->
        </el-select>
      </el-form-item>
      <el-form-item class="item-6" label="bestContactTime">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.bestContactTime }}
        </div>
        <el-date-picker
          type="date"
          v-if="!editSwitch"
          placeholder="选择日期"
          v-model="SaleNoteForm.bestContactTime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item class="item-7" label="Note">
        <div v-if="editSwitch" class="Note">
          {{ SaleNoteForm.Note }}
        </div>
        <el-input
          v-if="!editSwitch"
          type="textarea"
          :rows="5"
          placeholder="请输入"
          v-model="SaleNoteForm.note"
        ></el-input>
        <el-button v-if="!editSwitch" size="small" type="primary"
          >Save</el-button
        >
      </el-form-item>
      <el-form-item class="item-8" label="expectedDeposit">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.expectedDeposit }}
        </div>
        <el-select
          v-if="!editSwitch"
          v-model="SaleNoteForm.expectedDeposit"
          placeholder="请选择"
        >
          <el-option label="0-1000" value="shanghai"></el-option>
          <el-option label="1000-2000" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="item-9" label="lastModified">
        <div class="only-read">{{ SaleNoteForm.lastModified }}</div>
      </el-form-item>
      <el-form-item class="item-10" label="Platform">
        <div v-if="editSwitch" class="only-read">
          {{ SaleNoteForm.checkbox.join(",") }}
        </div>
        <el-checkbox-group v-if="!editSwitch" v-model="SaleNoteForm.checkbox">
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
</template>
<script>
export default {
  props: ["sidebarSwitch", "editSwitch"],
  data() {
    return {
      SaleNoteForm: {
        interest: "High",
        callback: "30/06/2021",
        status: "Open",
        note: "",
        tradingLevel: "新手",
        favo: "美国股票",
        bestContactTime: "",
        expectedDeposit: "",
        lastModified: "24/06/2021",
        checkbox: ["MT4", "MT5"],
      },
      rules: {},
    };
  },
};
</script>
<style lang="scss" scoped>
.salenote-component {
  padding: 10px;
  height: calc(100% - #{$header-hight});
  overflow-y: auto;
  overflow-x: hidden;
  .el-form--inline .el-form-item{
    // margin-right: 0
  }
  .el-form {
    display: grid;
    .only-read {
      line-height: 30px;
      min-height: 30px;
      border-bottom: 1px solid $border-color;
    }
    .item-7 {
      grid-row-start: 4;
      grid-row-end: 7;
    }
    .Note {
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
  .el-form.sidebar-open {
    grid-template-columns: repeat(2, auto);
  }
  .el-form.sidebar-close {
    grid-template-columns: repeat(4, 25%);
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
    .item-4 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .item-5 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .item-6 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .item-7 {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 7;
    }
    .item-8 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    .item-9 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    .item-10 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 5;
      grid-row-end: 7;
    }
  }
}
</style>