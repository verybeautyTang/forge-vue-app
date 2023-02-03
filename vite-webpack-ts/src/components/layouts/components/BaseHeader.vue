<script lang="ts" setup>
import { ref } from "vue";
import { toggleDark } from "@/composables";
import { ArrowDown } from "@element-plus/icons-vue";
import LangSelect from "@/components/LangSelect/index.vue";
import { userStore } from "@/store/slices/user";

const store = userStore();
</script>
<template>
  <div class="header-container">
    <!--语言选择-->
    <lang-select />
    <el-avatar
      class="header-avatar"
      :size="40"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ store.fullName }}
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
      class="border-none w-10 bg-transparent cursor-pointer"
      style="height: var(--ep-menu-item-height); background-color: aqua"
    >
      <i inline-flex i="dark:ep-moon ep-sunny" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
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
