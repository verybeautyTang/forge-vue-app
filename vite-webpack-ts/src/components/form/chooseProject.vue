<!-- 选择项目form-item -->
<!-- props -->
<!-- width、data、selected、placeholder、multiple、clearable、change事件、blur事件、style、class属性-->
<script lang="ts" setup>
import { peojectListEmits, peojectListProps } from "@/types/choose-project";
import { ref } from "vue";

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
    placeholder="Select"
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
