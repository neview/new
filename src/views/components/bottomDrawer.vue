<template>
  <n-drawer v-model:show="props.active" :placement="props.placement"  height="100" resizable>
    <n-drawer-content title="斯通纳">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>
<script setup lang="ts">
import { NDrawer,NDrawerContent } from "naive-ui";
import { ref, onMounted,defineProps } from "vue";
// const active = ref(true)
// const placement = ref('bottom')
// interface Props {
//   active?: boolean;
//   placement?: string;
// }
// defineProps<Props>();
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: "right",
  },
});
</script>
<style lang="scss" scoped>

</style>
