<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import CurrentTime from "@package/components/currenttime/index.vue";
// import ViteComponents from "../dist/vite-components.es";
import ViteComponents from "../package/webcomponents/index";
ViteComponents.registerCurrentTime();

// register();
</script>

<template>
  <div style="display: flex; justify-content: center">
    <current-time></current-time>
    <wbcp-current-time .format="'HH:mm:ss'"></wbcp-current-time>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
