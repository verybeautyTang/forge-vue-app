<script lang="ts" setup>
const data = [
  {
    name: "发起项目需求",
    desc: "含键值的游戏内文本翻译",
    role: [],
  },
  {
    name: "发起文本需求",
    desc: "运营公告、社媒文案等纯文本翻译",
    role: [],
  },
  {
    name: "发起项目需求",
    desc: "含图片的PR稿、PPT、Excel等文件翻译",
    role: [],
  },
];
</script>
<template>
  <div class="issue-container">
    <h2 class="issue-project">当前项目：project</h2>
    <el-row :gutter="12" class="issue-order">
      <el-col :span="8" v-for="item in data" :key="item.name">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>{{ item.name }}</span>
            </div>
          </template>
          <div>{{ item.desc }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
.issue-container {
  .issue-project {
    text-align: left;
  }
  .issue-order {
    margin: auto;
    padding-top: 15%;
  }
}
</style>
