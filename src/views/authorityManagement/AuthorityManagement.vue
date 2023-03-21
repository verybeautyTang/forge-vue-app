<template>
  <div class="auth-container">
    <!-- 表格 -->
    <auth-form />
    <auth-table />
  </div>
</template>
<script lang="ts" setup>
import AuthForm from "./components/AuthForm.vue";
import AuthTable from "./components/AuthTable.vue";
</script>
<style lang="scss" scoped>
.auth-container {
  width: 100%;
}
</style>
