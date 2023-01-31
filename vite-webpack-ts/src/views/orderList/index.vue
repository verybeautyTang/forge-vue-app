<template>
  <div class="order-list">
    <physical-table :header="OrderTableHeader" :date="[]"> </physical-table>
  </div>
</template>
<script lang="ts" setup>
import physicalTable from "@/components/table/physicalTable.vue";
import { OrderTableHeader } from "@/types/fixed-table";
</script>
