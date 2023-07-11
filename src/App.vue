<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import {
  NConfigProvider,
  NCard,
  NButton,
  darkTheme,
  NCarousel,
} from "naive-ui";

let darkTheme2 = ref("");
const switchTheme = () => {
  darkTheme2.value == ""
    ? (darkTheme2.value = darkTheme)
    : (darkTheme2.value = "");
};
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <n-config-provider :theme="darkTheme2">
    <n-card>
      <RouterView />
      <n-button class="suspend" @click="switchTheme">切换主题</n-button>
    </n-card>
  </n-config-provider>
</template>

<style scoped>
.suspend {
  position: fixed;
  top: 0.1rem;
  left: 0.3rem;
}
</style>
