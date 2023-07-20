<template>
  <div class="combo">
    <Header :title="titleValue"></Header>
  </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
const titleValue = "套餐";
</script>
<style lang="scss" scoped>
.combo {
  background-image: url("../assets/svg/address2.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
