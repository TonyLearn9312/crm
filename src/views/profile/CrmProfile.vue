<template>
  <div class="CrmProfile">
    <header>
      <h3>CRM Info</h3>
    </header>
    <div class="box">
      <div class="item">
        <p class="label">工号</p>
        <div class="content">Sam</div>
      </div>
      <div class="item">
        <p class="label">关联账户</p>
        <div class="content">456457121</div>
      </div>
      <div class="item">
        <p class="label">Email</p>
        <div class="content">782231@gmail.com</div>
      </div>
      <div class="item">
        <p class="label">Title</p>
        <div class="content">Miss</div>
      </div>
      <div class="item">
        <p class="label">Country</p>
        <div class="content">Korea</div>
      </div>
      <div class="item">
        <p class="label">DOB</p>
        <div class="content">03/06/1995</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.CrmProfile {
  overflow: hidden;
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
    .box {
    padding: 20px;
    height: calc(100%-#{$header-hight});
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    div.item {
      width: 200px;
      // margin-bottom: 20px;
      p {
        font-size: 16px;
        color: #606266;
        padding-bottom: 10px;
      }
      div.content {
        font-size: 12px;
        border-bottom: 1px solid #dcdfe6;
      }
    }
  }
}
</style>