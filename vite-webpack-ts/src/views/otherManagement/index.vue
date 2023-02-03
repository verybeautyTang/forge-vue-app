<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ $t("otherSettings.title") }}</span>
      </div>
    </template>
    <div
      v-for="item in SettingsData"
      :key="item.name"
      class="py-4 flex items-center"
    >
      <span class="pr-5 flex-initial w-44 leading-1">{{
        $t("otherSettings." + item.name)
      }}</span>
      <el-switch class="flex-initial w-32" v-model="reavitiveData[item.name]" />
    </div>
    <div>
      <span>{{ $t("otherSettings.updateTime") }}</span>
      <el-select></el-select>
      <span>{{ $t("otherSettings.remindTime") }}</span>
      <el-select></el-select>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { SettingsData } from "@/types/other-management";
import { reactive } from "vue";
const reavitiveData = reactive({
  newProjectReminder: false,
  newTextReminder: false,
  newSpecialReminder: false,
  orderDeley: false,
  chooseTime: "",
  updater: "",
});
</script>
