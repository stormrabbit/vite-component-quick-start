<template>
  <current-time :format="format"></current-time>
</template>

<script setup lang="ts">
// import CurrentTime from '/components/currenttime/index.vue'
import CurrentTime from "../../components/currenttime/index.vue";
const props = defineProps({
  format: {
    type: String,
    default: 'YYYY-MM-DD HH:mm:ss'
  }
})
console.log(props.format)

</script>

<style lang="scss">
@import "../../../node_modules/element-plus/theme-chalk/el-card.css";
</style>
