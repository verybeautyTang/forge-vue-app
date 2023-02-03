<template>
  <div class="pendding-container">
    <h2 class="pending-project">当前项目：project</h2>
    <el-form
      :label-position="labelPosition"
      label-width="200px"
      :model="formLabelAlign"
      :rules="rules"
      style="max-width: 460px"
    >
      <el-form-item :label="$t('createOrder.Presenter')">
        <span>{{ formLabelAlign.username }}</span>
      </el-form-item>
      <el-form-item :label="$t('createOrder.RequirementType')">
        <span>{{ formLabelAlign.Pendingtype }}</span>
      </el-form-item>
      <el-form-item :label="$t('createOrder.Project')">
        <choose-project
          :projects="options"
          :selected="formLabelAlign.project"
          @change="(e: string) => (formLabelAlign.project = e)"
        ></choose-project>
      </el-form-item>

      <el-form-item :label="$t('createOrder.SourceLanguage')">
        <choose-language
          placeholder="请选择源语种"
          :list="options"
          :selected="formLabelAlign.sourceLanguage"
        ></choose-language>
      </el-form-item>
      <el-form-item :label="$t('createOrder.TargetLanguage')">
        <choose-language
          placeholder="请选择目标语种(可多选)"
          :multiple="true"
          :selected="formLabelAlign.targetLanguage"
          :list="options"
        ></choose-language>
      </el-form-item>
      <el-form-item :label="$t('createOrder.TargetLanguage')">
        <el-radio-group v-model="formLabelAlign.textType" class="ml-4">
          <el-radio label="uploadFile" size="large">上传文件</el-radio>
          <el-radio label="addTable" size="large">表格填充</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="formLabelAlign.uploadName">
        <form-table v-if="formLabelAlign.textType === 'addTable'"></form-table>
        <template v-else>
          <a>点击下载模版</a>
          <form-upload></form-upload>
        </template>
      </el-form-item>
      <el-form-item label="截止日期">
        <!-- <el-date-picker
          v-model="formLabelAlign.expirationDate"
          type="date"
          placeholder="Pick a day"
        /> -->
      </el-form-item>
      <el-form-item label="备注信息(Remarks)">
        <el-input
          placeholder="请填写备注信息"
          show-word-limit
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="参考附件(Attachment)">
        <form-upload></form-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { BasicPendingForm, PendingUploadName } from "@/types/pending-order";
import { FormRules } from "element-plus/es/tokens/form";
import { reactive, ref } from "vue";
import { userStore } from "@/store/slices/user";
import { useRoute } from "vue-router";
import chooseProject from "@/components/form/chooseProject.vue";
import chooseLanguage from "@/components/form/chooseLanguage.vue";
import formUpload from "@/components/form/formUpload.vue";
import formTable from "./createTable.vue";
const labelPosition = ref("right");
const store = userStore();
const route = useRoute();
const formLabelAlign: BasicPendingForm = reactive({
  username: store.fullName,
  project: "",
  sourceLanguage: "",
  targetLanguage: [],
  version: "",
  expirationDate: "",
  textType: "uploadFile",
  remark: "",
  uploadName: PendingUploadName.Text,
  Pendingtype: route.params.name,

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
