<template>
  <el-config-provider namespace="ep" :locale="appStore.locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import { useAppStore } from "@/store/slices/app";
const appStore = useAppStore();
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-align: center;
  color: var(--ep-text-color-primary);
  color: #2c3e50;
  height: 100%;
}
.container {
  height: 100%;
}
.header {
  padding: 0;
  margin: 0;
}
</style>
