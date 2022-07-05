
<template>
  <div>
    <div>
      <el-card class="box-card">
        <div>当前时间： {{ currentDateTime }}</div>
      </el-card>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";
let currentDateTime = ref(dayjs().format("YYYY-MM-DD HH:mm:ss"));

setInterval(() => {
  currentDateTime.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
}, 1000);
</script>

<style lang="scss">
// @import "../../../node_modules/element-plus/theme-chalk/el-card.css";
</style>