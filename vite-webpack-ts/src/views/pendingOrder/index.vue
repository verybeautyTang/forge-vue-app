<template>
  <div class="pendding-container">
    <h2 class="pending-project">当前项目：project</h2>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      :rules="rules"
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
        <span>{{ formLabelAlign.Pendingtype }}</span>
      </el-form-item>
      <el-form-item label="源语种">
        <el-select
          v-model="formLabelAlign.sourceLanguage"
          class="m-2"
          placeholder="Select"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="目标语种">
        <el-select
          v-model="formLabelAlign.targetLanguage"
          multiple
          class="m-2"
          placeholder="Select"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item :label="formLabelAlign.uploadName">
        <span>{{ formLabelAlign.Pendingtype }}</span>
      </el-form-item>
      <el-form-item label="截止日期">
        <el-date-picker
          v-model="formLabelAlign.expirationDate"
          type="date"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item label="备注信息或参考附件">
        <span>{{ formLabelAlign.Pendingtype }}</span>
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
import { FormRules } from "element-plus/es/tokens/form";
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
const rules = reactive<FormRules>({});

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>
<style lang="scss">
.pendding-container {
  .pending-project {
    text-align: left;
  }
}
</style>
