<template>
  <div class="page-header">
    <div class="user-info">
      <div class="info-slogan">
        <div class="info-avatar">
          <img src="" alt="" />
        </div>
        <div class="slogan">
          <span>Good Morning 👋</span>
          <span>Andrew Ainsley</span>
        </div>
      </div>
      <img class="info-img" src="@/assets/svg/info.svg" alt="" />
    </div>
    <div class="node-butt">
      <n-button
        ghost
        color="rgba(255, 152, 31, 1)"
        icon-placement="right"
        round
      >
        <template #icon>
          <n-icon>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0575 14.3589C9.00917 14.3118 8.8025 14.134 8.6325 13.9684C7.56333 12.9975 5.81333 10.4646 5.27917 9.1389C5.19333 8.93757 5.01167 8.42856 5 8.1566C5 7.89601 5.06 7.64759 5.18167 7.41054C5.35167 7.11503 5.61917 6.87798 5.935 6.74809C6.15417 6.66447 6.81 6.53458 6.82167 6.53458C7.53917 6.40469 8.705 6.33325 9.99333 6.33325C11.2208 6.33325 12.3392 6.40469 13.0675 6.51104C13.0792 6.52322 13.8942 6.65311 14.1733 6.79518C14.6833 7.05577 15 7.56478 15 8.10951V8.1566C14.9875 8.51137 14.6708 9.25743 14.6592 9.25743C14.1242 10.5117 12.46 12.9861 11.3542 13.9806C11.3542 13.9806 11.07 14.2607 10.8925 14.3824C10.6375 14.5724 10.3217 14.6666 10.0058 14.6666C9.65333 14.6666 9.325 14.5602 9.0575 14.3589"
                fill="#FF981F"
              />
            </svg>
          </n-icon>
        </template>
        Change Location
      </n-button>
    </div>
    <div class="node-name">Germany</div>
    <div class="node-switch">
      <div class="wave1">
        <div class="wave2">
          <div class="progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NIcon } from "naive-ui";
</script>
<style lang="scss" scoped>
.page-header {
  background-image: url("../assets/svg/address.svg") 100% 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0.2rem 0.2rem;
  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info-slogan {
      display: flex;
      align-items: center;
      .info-avatar {
        width: 0.48rem;
        height: 0.48rem;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 0.2rem;
        background-color: var(--qny-index-background-color-light);
      }
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
      .slogan {
        font-family: Urbanist;
        display: flex;
        flex-direction: column;
        span:nth-child(1) {
          font-size: 0.16rem;
          font-style: normal;
          font-weight: 400;
          color: var(--qny-index-color-light);
        }
        span:nth-child(2) {
          font-size: 0.2rem;
          font-style: normal;
          font-weight: 700;
          color: var(--qny-index-color-light);
        }
      }
    }
    .info-img {
      width: 0.28rem;
      height: 0.28rem;
    }
  }
  .node-butt {
    text-align: center;
    margin-top: 0.3rem;
  }
  .node-name {
    text-align: center;
    font-family: Urbanist;
    font-size: 0.4rem;
    font-style: normal;
    font-weight: 700;
    color: #ff981f;
    margin-top: 0.3rem;
  }
  .node-switch {
    width: 100%;
    height: 60vh;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--qny-index-background-color2-light);
    border-radius: 0.6rem 0.6rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .wave1 {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: var(--qny-index-background-color3-light);
      z-index: 9;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .wave2 {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        background-color: var(--qny-index-background-color4-light);
        z-index: 99;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .progress {
        }
      }
    }
  }
  >>> .n-base-selection-label {
    border-radius: 0.2rem !important;
  }
}
</style>
