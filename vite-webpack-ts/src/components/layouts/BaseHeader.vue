<script lang="ts" setup>
import { ref } from "vue";
import { toggleDark } from "@/composables";
import { ArrowDown } from "@element-plus/icons-vue";
const language = ref("zh-cn");
const value = ref("");
const options = [
  {
    value: "zh",
    label: "简体中文",
  },
  {
    value: "en",
    label: "English",
  },
];
</script>
<template>
  <div class="header-container">
    <el-select
      v-model="value"
      class="m-2"
      placeholder="请选择语言"
      size="large"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-avatar
      class="header-avatar"
      :size="40"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        用户名
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>我的订单</el-dropdown-item>
          <el-dropdown-item>待处理</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <button
      @click="toggleDark()"
      class="border-none w-full bg-transparent cursor-pointer"
      style="height: var(--ep-menu-item-height)"
    >
      <i inline-flex i="dark:ep-moon ep-sunny" />
    </button>
  </div>
</template>

<style lang="scss">
.header-container {
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  align-items: center;
  border-bottom: solid 1px var(--ep-menu-border-color);
  height: 100%;
  overflow: hidden;
  .header-avatar {
    margin: 0 10px;
  }
}
</style>
