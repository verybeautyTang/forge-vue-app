<!-- 关键字搜索 -->
<!-- 默认记住最近三个搜索过的选项 -->
<!-- 支持正则表达式 -->
<script lang="ts" setup>
import { ref } from "vue";
import { keywordType, keywordEmitType } from "@/types/keyword";

const props = withDefaults(defineProps<keywordType>(), {});

const value = ref(props.value);

const emits = defineEmits<keywordEmitType>();

const buttonClick = () => {
  emits?.click?.();
};

const inputBlur = () => {
  emits?.blur?.();
};

const chooseRemote = (item: string) => {
  console.log(item);
  value.value = item;
};
</script>

<template>
  <div>
    <el-input
      v-model="value"
      :placeholder="props.placeholder"
      :size="props.size"
      :clearable="props.clear"
      :prefix-icon="props.icon"
      @blur="inputBlur"
    />
    <div v-show="props.remoteOption" v-for="item in remoteOption" :key="item">
      <div @click="chooseRemote(item)">{{ item }}</div>
    </div>
    <el-button type="primary" v-show="emits.click" @click="buttonClick"
      >Primary</el-button
    >
  </div>
</template>
