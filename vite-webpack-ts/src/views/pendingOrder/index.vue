<template>
  <div class="pendding-container">
    <h2 class="pending-project">当前项目：project</h2>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="发起人">
        <!-- <el-input v-model="formLabelAlign.username" /> -->
        <span>{{ formLabelAlign.username || "是我呀" }}</span>
      </el-form-item>
      <el-form-item label="所属项目">
        <el-input v-model="formLabelAlign.project" />
      </el-form-item>
      <el-form-item label="需求类型">
        <el-input v-model="formLabelAlign.uploadName" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import {
  BasicPendingForm,
  PendingType,
  PendingUploadName,
} from "@/types/pending-order";
import { reactive, ref } from "vue";

const labelPosition = ref("right");

// const props = defineProps<{ type: string }>();
const formLabelAlign: BasicPendingForm = reactive({
  username: "",
  project: "",
  sourceLanguage: "",
  targetLanguage: [],
  version: "",
  expirationDate: "",
  remark: "",
  // uploadName: PendingUploadName[props.type],
  // Pendingtype: PendingType[props.type],
  uploadName: PendingUploadName.Text,
  Pendingtype: PendingType.Text,
  uploadFlie: "",
});
</script>
<style lang="scss">
.pendding-container {
  .pending-project {
    text-align: left;
  }
}
</style>
