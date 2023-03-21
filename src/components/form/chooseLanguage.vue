<!-- 选择语种 -->
<!-- 需要考虑多选的问题 -->
<!-- 选择项目form-item -->
<!-- props -->
<!-- width、data、selected、placeholder、multiple、clearable、change事件、blur事件、style、class属性-->
<script lang="ts" setup>
import { ref } from "vue";

export type LanguageProps = {
  /** 选择框的大小 */
  width?: number | string;

  /** 选择框的尺寸 */
  size?: "large" | "medium" | "default";

  /**  当前默认选择的数据  */
  selected?: string | string[];

  /** 展位字符   */
  placeholder?: string;

  /**  是否可多选  */
  multiple?: boolean;

  /**  是否可清除  */
  clearable?: boolean;

  /**  自定义css  */
  style?: string;

  /** 自定义类   */
  class?: string;
};

export type LanguageEmits = {
  /**  选中值时发生变化  */
  change?: (selected: string) => void;
};
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

const props = withDefaults(defineProps<LanguageProps>(), {
  placeholder: "请选择语言",
  size: "default",
  clearable: false,
  multiple: false,
  width: "100%",
});

console.log(props);
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
    empty-text="暂无数据"
    :class="`m-2 ${props.class}`"
    :placeholder="props.placeholder"
    :multiple="props.multiple"
    size="large"
    :style="props.style"
    @change="selectChanged"
    @blur="selectBlur"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
