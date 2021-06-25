<template>
  <div>
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
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
<style lang="scss" scoped>
.activity-table {
  //   height: calc(100% - #{$header-hight} - #{$toolbar-height});
}
</style>