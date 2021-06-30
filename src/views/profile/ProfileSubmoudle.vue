<template>
  <div class="ProfileSubmoudle">
    <header>
      <div class="demo-type">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <h3>Profile</h3>
    </header>
    <div class="box">
      <div class="item">
        <p class="label">Name</p>
        <div class="content">Sam</div>
      </div>
      <div class="item">
        <p class="label">Phone</p>
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
<script>
export default {
  data() {
    return {
      money_range_maximum: "",
    };
  },
  created() {},
  methods: {
    errorHandler() {
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
.ProfileSubmoudle {
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