<!-- 选择项目form-item -->
<!-- props -->
<!-- width、data、selected、placeholder、multiple、clearable、change事件、blur事件、style、class属性-->
<script lang="ts" setup>
import { ProjectItemType } from "@/types/choose-project";
import { ref } from "vue";
export type peojectListProps = {
  /** 传入的数据 */
  projects: ProjectItemType[];

  /** 选择框的大小 */
  width?: number | string;

  /** 选择框的尺寸 */
  size?: "large" | "medium" | "default";

  /**  当前默认选择的数据  */
  selected?: string;

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

export type peojectListEmits = {
  /**  选中值时发生变化  */
  change?: (selected: string) => void;
};

const props = withDefaults(defineProps<peojectListProps>(), {
  placeholder: "请选择项目",
  size: "default",
  clearable: false,
  multiple: false,
  width: "100%",
});

const emits = defineEmits<peojectListEmits>();

const selectChanged = (e: string) => {
  console.log("change事件");
  emits?.change?.(e);
};

const select = ref(props.selected);
</script>
<template>
  <el-select
    v-model="select"
    :class="`m-2 ${props.class}`"
    :placeholder="props.placeholder"
    size="large"
    :style="props.style"
    @change="selectChanged"
  >
    <el-option
      v-for="item in props.projects"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
