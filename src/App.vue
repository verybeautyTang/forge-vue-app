<template>
  <el-config-provider :locale="appStore.locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/slices/app";
import { ElConfigProvider } from 'element-plus'


const appStore = useAppStore();

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // text-align: center;
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
