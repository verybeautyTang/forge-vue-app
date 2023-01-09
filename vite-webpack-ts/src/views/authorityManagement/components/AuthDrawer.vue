<template>
  <el-drawer
    v-model="drawer"
    :direction="direction"
    class="auth-drawer"
    @close="cancelClick"
  >
    <template #header>
      <h3 class="auth-header">{{ props.title }}</h3>
    </template>
    <template #default>
      <div>
        <!-- <auth-drawer-form></auth-drawer-form> -->
        <el-form class="drawer-container">
          <el-form-item label="邮箱号">
            <el-input v-model="formInline.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="选择项目">
            <el-select
              v-model="formInline.project"
              placeholder="选择项目"
              multiple
            >
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="选择权限">
            <el-select v-model="formInline.region" placeholder="选择权限">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="选择语种">
            <el-select
              v-model="formInline.language"
              placeholder="选择语种"
              multiple
            >
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
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
import { ref, watch, defineEmits } from "vue";
import AuthDrawerForm from "./AuthDrawerForm.vue";
const props = defineProps<{
  isShow: boolean;
  title: string;
  form?: any;
}>();
const emit = defineEmits(["updateDialog"]);

// 监听props是否展示
watch(
  () => props.isShow,
  (newValue, oldValue) => {
    drawer.value = newValue;
  }
);

const formInline = reactive({
  email: "",
  project: [],
  language: [],
  region: "",
});
const drawer = ref(props.isShow);
const direction = ref("rtl");

function cancelClick() {
  drawer.value = false;
  emit("updateDialog", true);
}
function confirmClick() {
  drawer.value = false;
  emit("updateDialog", formInline);
}
</script>
<style lang="scss">
.auth-drawer {
  width: 40% !important;
  .drawer-container {
    .ep-select {
      width: 100%;
    }
  }
  .auth-header {
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
