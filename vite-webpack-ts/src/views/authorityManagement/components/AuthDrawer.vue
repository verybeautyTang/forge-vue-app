<template>
  <el-drawer v-model="drawer" :direction="direction" class="auth-drawer">
    <template #header>
      <h3 class="auth-header">{{ props.title ? props.title : "权限管理" }}</h3>
    </template>
    <template #default>
      <div>
        <auth-drawer-form></auth-drawer-form>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick">保存</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { ElMessageBox } from "element-plus";
import AuthDrawerForm from "./AuthDrawerForm.vue";
const props = defineProps<{
  isShow: boolean;
  title?: string;
}>();

// 监听props是否展示
watch(
  () => props.isShow,
  (newValue, oldValue) => {
    drawer.value = newValue;
  }
);

console.log(props);
const drawer = ref(props.isShow);
const direction = ref("rtl");
const radio1 = ref("Option 1");

function cancelClick() {
  drawer.value = false;
}
function confirmClick() {
  drawer.value = false;
}
</script>
<style lang="scss">
.auth-drawer {
  width: 40% !important;
  .auth-header {
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
