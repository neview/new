<template>
  <div class="node-page">
    <div style="text-align: center">
      <n-input
        placeholder="搜索"
        round
        style="padding: 0.05rem 0; width: 80vw; margin-top: 0.2rem"
      >
        <template #prefix>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.80589"
              cy="9.80541"
              r="7.49047"
              stroke="#BDBDBD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0156 15.4043L17.9523 18.3334"
              stroke="#BDBDBD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </n-input>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NInput } from "naive-ui";
</script>
<style lang="scss" scoped>
.node-page {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/svg/address.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 -1.8rem;
}
</style>
