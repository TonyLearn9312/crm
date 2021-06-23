<template>
  <!-- 组件代码 -->
  <div class="access-popover">
    <el-popover
      popper-class="access-popper"
      :popper-options="{ boundariesElement: 'body' }"
      ref="popover5"
      placement="left"
      width="400"
      v-model="visible"
    >
      <!-- <p>{{content}}</p> -->
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-checkbox-group v-loading="loading" v-model="row.selectAccess">
        <el-checkbox v-for="item in access" :label="item" :key="item">{{
          item
        }}</el-checkbox>
      </el-checkbox-group>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false"
          >取消</el-button
        >
        <el-button type="danger" size="mini" @click="comfirmItem(row)"
          >确定</el-button
        >
      </div>
    </el-popover>
    <u slot="reference" v-popover:popover5>{{
      row.access.length ? row.access.join(",") : "无"
    }}</u>
  </div>
</template>
 
<script>
module.exports = {
  // 组件名称, 在外部可以使用<delete-confirm-popover></delete-confirm-popover>来使用组件
  name: "delete-confirm-popover",
  // 组件的属性, 可以从外部传入相应的值进来
  props: ["content", "id", "row", "access"],
  data: function () {
    return {
      input: "",
      loading: false,
      // 每个组件自己的控制变量
      visible: false,
    };
  },
  methods: {
    comfirmItem(row) {
      console.log(row);
      row.access = row.selectAccess;
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
      // 具体需要执行的逻辑, 我还不是很会回调的写法, 所以就直接这样完成具体逻辑
      // console.log("删除" + id);
      this.visible = false;
    },
  },
};
</script>
<style lang="scss">
.access-popper {
  .el-checkbox-group {
    display: flex;
    height: 120px;
    padding: 10px 0;
    overflow-y: auto;
    flex-direction: column;
  }
}
</style>