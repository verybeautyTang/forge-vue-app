<!-- 选择时间【提交时间、截止时间】 -->
<!-- props -->
<!-- width、data、selected、placeholder、multiple、clearable、change事件、blur事件、style、class属性-->
<script lang="ts" setup>
import { ref } from "vue";

import chooseTime, {
  chooseTimeProps,
  chooseTimeEmits,
} from "@/types/choose-time";

const props = withDefaults(defineProps<chooseTimeProps>(), {
  placeholder: "请选择时间",
  size: "default",
  clearable: false,
  multiple: false,
  width: "100%",
});

const emits = defineEmits<chooseTimeEmits>();

const selectChanged = (e: string) => {
  console.log("change事件");
  emits?.change?.(e);
};

const selectBlur = (e: FocusEvent) => {
  console.log("blur事件");
  emits?.blur?.(e);
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
      v-for="item in chooseTime"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
