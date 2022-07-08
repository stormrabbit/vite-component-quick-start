
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
const props = defineProps({
  format: String
})
let currentDateTime = ref(dayjs().format(props.format));

setInterval(() => {
  currentDateTime.value = dayjs().format(props.format);
}, 1000);
</script>

<style lang="scss">
// @import "../../../node_modules/element-plus/theme-chalk/el-card.css";
</style>