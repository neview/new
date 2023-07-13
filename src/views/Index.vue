<template>
  <div class="authorized" @click="switchColor">
    <img src="@/assets/svg/email.svg" alt="" />
    <input type="text" placeholder="email" />
  </div>
  <div class="authorized" @click="switchColor2">
    <img src="@/assets/svg/password.svg" alt="" />
    <input :type="inputType" placeholder="password" />
    <img src="@/assets/svg/passHide.svg" alt="" @click="password" />
  </div>
  <n-checkbox v-model:checked="disabled2"> Remember me </n-checkbox>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NInput, NCheckbox } from "naive-ui";
let inputType = ref("text");
let disabled2 = ref(false);
const switchColor = () => {
  let dom = document.documentElement;
  dom.style.setProperty(
    "--qny-background-color",
    "var(--qny-background-color-dark)"
  );
  dom.style.setProperty("--qny-color", "var(--qny-color-dark)");
};
const switchColor2 = () => {
  let dom = document.documentElement;
  dom.style.setProperty(
    "--qny-background-color",
    "var(--qny-background-color-light)"
  );
  dom.style.setProperty("--qny-color", "var(--qny-color-light)");
};
const password = () => {
  inputType.value == "text"
    ? (inputType.value = "password")
    : (inputType.value = "text");
};
</script>
<style lang="scss" scoped>
.authorized {
  display: flex;
  align-items: center;
  padding: 0.15rem;
  background-color: var(--qny-background-color);
  border-radius: 0.1rem;
  margin-top: 0.3rem;
  transition: all 0.5s;
}
input {
  width: 83%;
  border: none;
  outline: none;
  background-color: var(--qny-background-color);
  margin-left: 0.1rem;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 400;
  font-size: 0.14rem;
  color: var(--qny-color);
  transition: all 0.5s;
}
input::-webkit-input-placeholder {
  color: var(--qny-color);
}
</style>
