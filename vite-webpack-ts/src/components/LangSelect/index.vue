<script setup lang="ts">
import { ref} from 'vue';
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
import { useAppStore } from "@/store/slices/app";

const appStore = useAppStore();

const { locale } = useI18n();

const value = ref(appStore.locale);
function handleLanguageChange(lang: string) {
  console.log(lang);
  locale.value = lang;
  appStore.changeLanguage(lang);
  if (lang == "en") {
    console.log(ElMessage);
    ElMessage.success("Switch Language Successful!");
  } else {
    ElMessage.success("切换语言成功！");
  }
}
const options = [
  {
    value: "zhCn",
    label: "简体中文",
  },
  {
    value: "en",
    label: "English",
  },
];
</script>

<template>
  <el-select
    class="m-2"
    placeholder="请选择语言"
    v-model="value"
    size="large"
    @change="handleLanguageChange"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <!-- <div class="cursor-pointer w-[40px] h-[50px] leading-[50px] text-center">
      <svg-icon class-name="international-icon" icon-class="language" />
    </div> -->
  <!-- <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :disabled="appStore.language === 'zh-cn'"
          command="zh-cn"
        >
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown> -->
</template>
