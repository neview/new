<template>
    <Header :title="titleValue" :isImg="true"></Header>
  <div class="edit-img">
    <img src="@/assets/svg/email/edit.svg" alt="">
  </div>
  <div class="tips-title">
    Create Your New Password
  </div>
  <div class="authorized">
    <img src="@/assets/svg/email.svg" alt="" />
    <input type="text" placeholder="email" />
  </div>
  <div class="submit-butt" @click="">
    Continue
  </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
import { NCarousel, NRadio,NButton } from "naive-ui";
import { ref } from "vue";
const titleValue = "Create New Password";
let checkedValue = ref<number | null>(1);
const handleChange = () => {};
const selectRadio = (obj) => {
  checkedValue.value = obj;
};
</script>
<style lang="scss" scoped>
.edit-img{
  text-align: center;
  margin: 0.2rem 0;
  img{
    width: 3.29rem;
    height: 2.50rem;
  }
}
.tips-title{
  color: #212121;
  font-family: Urbanist;
  font-size: 0.18rem;
  font-style: normal;
  font-weight: 500;
  margin-left: 0.2rem;
}
.authorized {
  display: flex;
  align-items: center;
  padding: 0.15rem;
  background-color: #efefef;
  border-radius: 0.1rem;
  margin: 0.3rem;
  transition: all 0.5s;
}
.submit-butt{
  border-radius: 1rem;
  background-color: #335EF7;
  box-shadow: 0.04rem 0.08rem 0.24rem 0px rgba(51, 94, 247, 0.25);
  font-family: Urbanist;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 700;
  color: #FFF;
  width: 90%;
  margin: 0.3rem auto;
  padding: 0.15rem 0;
  text-align: center;
  margin-bottom: 0.8rem;
}
input {
  width: 83%;
  border: none;
  outline: none;
  background-color: #efefef;
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
