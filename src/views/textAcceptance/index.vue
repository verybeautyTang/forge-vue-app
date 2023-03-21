<template>
  <div class="detail-container">
    <div class="detail-header">
      <div class="status order-status">
        <div>订单状态： 已完成</div>
      </div>
      <div class="status">
        <div>订单状态： 已完成</div>
      </div>
    </div>
    <div class="detail-content">
      <div class="status order-status">
        <div class="content-item">订单详情</div>
        <div>发起人(Presenter)：zizheng.wang</div>
        <div>需求类型(Requirement Type)：项目需求</div>
        <div>所属项目(Project)：项目A</div>
        <div>源语种(Source Language)：简体中文</div>
        <div>目标语种(Target Language)：英语 韩语 日语</div>
        <div>版本号(Version)：1.0</div>
        <div>需求文本包（.csv文件）：游戏文本.csv</div>
        <div>截止日期（Deadline）：2022.12.25 12:00:00</div>
        <div>备注信息（Remarks）：请参考附件的内容</div>
        <div>参考附件（Attachment）：游戏文本.csv</div>
      </div>
      <div class="status">
        <div>历史记录</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const data = reactive({});
</script>
<style lang="scss">
.detail-container {
  .detail-header {
    width: 100%;
    display: flex;
    text-align: left;
  }
  .detail-content {
    width: 100%;
    display: flex;
    text-align: left;
    padding-top: 3%;
  }
  .order-status {
    margin-right: 10%;
  }
  .status {
    padding: 2% 1%;
    // border-radius: 10px;
    border: 2px solid #aaaaaa;
    font-size: 22px;
    font-weight: 500;
    width: 40%;
  }
}
</style>
