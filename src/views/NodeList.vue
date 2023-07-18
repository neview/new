<template>
  <div class="aaa">
    <n-progress
      type="circle"
      :percentage="percentage"
      offset-degree="-50"
      color="#FFA830"
      :show-indicator="false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NProgress } from "naive-ui";
const percentage = ref(20);
</script>
<style lang="scss" scoped>
.aaa {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/svg/address.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 -1.8rem;
}
</style>
