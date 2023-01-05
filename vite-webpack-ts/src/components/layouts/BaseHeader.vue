<script lang="ts" setup>
import { ref } from "vue";
import { toggleDark } from "@/composables";
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const language = ref("zh-cn");
// 改变文本
const toggle = (value: string) => {
  console.log(value);
  language.value = value;
};
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>简体中文</template>
      <el-menu-item index="2-1" @click="toggle('zh-cn')">简体中文</el-menu-item>
      <el-menu-item index="2-2" @click="toggle('en')">English</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>用户名</template>
      <el-menu-item index="3-1">我的订单</el-menu-item>
      <el-menu-item index="3-2">退出登录</el-menu-item>
    </el-sub-menu>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
