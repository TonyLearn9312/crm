<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang='scss'>
#app {
  color: #2c3e50;
  height: 100%;
  @include Font($FontSize:12px, $lineHeight:inherit, $color:#606266);

  .el-button {
    // padding: 0;
    font-size: 12px;
  }
  .el-table--scrollable-x .el-table__body-wrapper {
    overflow-x: hidden;
  }
  .el-table {
    font-size: 12px;
  }
  .el-form-item__error {
    width: 200px;
    padding-top: 0;
    position: relative;
  }
  .el-form-item__label {
    line-height: 30px;
    font-size: 12px;
  }
  .el-form-item__content {
    // margin-bottom: 5px;
    width: 250px;
    line-height: 30px;
    font-size: 12px;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 250px;
  }
  .el-input__inner {
    width: 250px;
    height: 30px;
    line-height: 30px;
  }

  .el-input {
    // height: 30px;
    font-size: 12px;
    line-height: 30px;
  }
  .el-form-item {
    margin-bottom: 5px;
  }
  .el-form-item.Email,
  .el-form-item.Mobile {
    margin-bottom: 0;
  }
  .el-input__icon {
    line-height: 30px;
  }
}
</style>

