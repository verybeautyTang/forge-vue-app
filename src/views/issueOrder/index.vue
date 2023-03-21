<script lang="ts" setup>
import { PendingDetailType, PendingType } from "@/types/pending-order";
import { RoleList } from "@/types/role";
//引入路由函数
import { useRouter } from "vue-router";
const router = useRouter();

type IProps = {
  /** 发起名称 */
  name: PendingType;
  /** 发起描述 */
  desc: string;
  /** 对应颜色 */
  color: string;
  /** 无权限角色 */
  Disabledrole?: Array<RoleList>;
};
const data: IProps[] = [
  {
    name: PendingType.Project,
    desc: PendingDetailType.Project,
    color: "#169BD5",
    Disabledrole: [RoleList.GeneralUser, RoleList.ProjectTranslator],
  },
  {
    name: PendingType.Text,
    desc: PendingDetailType.Text,
    color: "#70B603",
  },
  {
    name: PendingType.Special,
    desc: PendingDetailType.Special,
    color: "#C280FF",
  },
];

const issueHandle = (name: PendingType) => {
  router.push({
    path: `/order-management/create-order/${encodeURIComponent(name)}/1`,
    // query: {
    //   name: encodeURIComponent(name),
    //   edit: 1,
    // },
  });
};
</script>
<template>
  <div class="issue-container">
    <el-row justify="space-evenly" class="issue-order">
      <el-col
        :span="5"
        v-for="item in data"
        :key="item.name"
        @click="issueHandle(item.name)"
      >
        <div class="issue-button" :style="{ backgroundColor: item.color }">
          {{ $t(item.name) }}
        </div>
        <span class="issue-desc">{{ $t(item.desc) }}</span>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.issue-container {
  .issue-project {
    text-align: left;
  }
  .issue-order {
    margin: auto;
    padding-top: 15%;
    .issue-button {
      padding: 5%;
      margin-bottom: 10%;
      font-weight: 600;
      cursor: pointer;
      color: #ffffff;
      border-radius: 5px;
    }
    .issue-desc {
      font-size: 14px;
      color: #000000;
      // white-space: nowrap;
    }
  }
}
</style>
