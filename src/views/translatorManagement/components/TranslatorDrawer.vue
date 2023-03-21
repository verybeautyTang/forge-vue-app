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
          <el-form-item label="译者账号" required>
            <el-input v-model="formInline.email" placeholder="请输入译者账号" />
          </el-form-item>
          <el-form-item label="公司" required>
            <el-input v-model="formInline.email" placeholder="请输入公司名" />
          </el-form-item>
          <el-form-item label="姓名" required>
            <el-input v-model="formInline.email" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="formInline.email" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="选择语种" required>
            <el-select
              v-model="formInline.language"
              placeholder="选择语种"
              
              multiple
            >
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="翻译单价" required>
            <el-input v-model="formInline.email" placeholder="请输入翻译单价" />
          </el-form-item>
          <el-form-item label="校对单价" required>
            <el-input v-model="formInline.email" placeholder="请输入校对单价" />
          </el-form-item>
          <el-form-item label="结算币种" required>
            <el-select
              v-model="formInline.language"
              placeholder="请选择结算币种"
              multiple
            >
              <el-option label="CNY" value="CNY" />
              <el-option label="USD two" value="USD" />
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
import AuthDrawerForm from "./TranslatorDrawerForm.vue";
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
