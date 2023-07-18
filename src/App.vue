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

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: "#335EF7",
  },
  // Button: {
  //   textColor: "#FF0000",
  // },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: "#FF0000",
  //     },
  //   },
  // },
  // Radio: {
  //   textColor: "RGBA(27,124,222)",
  // },
};

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
  <n-config-provider :theme="darkTheme2" :theme-overrides="themeOverrides">
    <!-- <n-card :bordered="false"> -->
    <RouterView />
    <!-- <n-button class="suspend" @click="switchTheme">切换主题</n-button> -->
    <!-- </n-card> -->
  </n-config-provider>
</template>

<style scoped>
.suspend {
  position: fixed;
  top: 0.1rem;
  left: 0.3rem;
}
</style>
