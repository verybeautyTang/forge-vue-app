<!-- 选择语种 -->
<!-- 需要考虑多选的问题 -->
<!-- 选择项目form-item -->
<!-- props -->
<!-- width、data、selected、placeholder、multiple、clearable、change事件、blur事件、style、class属性-->
<script lang="ts" setup>
import { ref } from "vue";

import { LanguageEmits, LanguageProps } from "@/types/choose-language";

const props = withDefaults(defineProps<LanguageProps>(), {
  placeholder: "请选择语言",
  size: "default",
  // list: chooseTime || undefined,
  clearable: false,
  multiple: false,
  width: "100%",
});

const emits = defineEmits<LanguageEmits>();

const selectChanged = (e: string) => {
  console.log("change事件");
  emits?.change?.(e);
};

const selectBlur = (e: FocusEvent) => {
  console.log("blur事件");
};
const select = ref(props.selected);
</script>
<template>
  <el-select
    v-model="select"
    :class="`m-2 ${props.class}`"
    placeholder="Select"
    size="large"
    :style="props.style"
    @change="selectChanged"
    @blur="selectBlur"
  >
    <el-option
      v-for="item in props.list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
