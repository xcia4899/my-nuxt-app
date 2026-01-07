<template>
  <van-tabs v-model:active="active" swipeable animated  @click-tab="onClickTab">
    <van-tab v-for="(item, index) in tabs" :key="item.path">
      <template #title>
        <span class="tabItem" :class="{ active: active === index }">
          {{ item.title }}
        </span>
      </template>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
type TabItem = {
  title: string;
  path: string;
};
const tabs: TabItem[] = [
  { title: "熱門", path: "/" },
  { title: "影片", path: "/video" },
  { title: "遊戲", path: "/games" },
  { title: "生活", path: "/live" },
  { title: "競技", path: "" },
  { title: "科技", path: "" },
  { title: "音樂", path: "" },
];

const active = ref(0);
const router = useRouter();
const route = useRoute();

const onClickTab = ({ name }: { name: number | string }) => {
  const idx = Number(name);
  router.push(tabs[idx]?.path ?? "/");
};

// 路由變動時，反向同步 active（F5/手打網址/程式跳轉都會同步）
watch(
  () => route.path,
  (path) => {
    const idx = tabs.findIndex((t) => t.path === path);
    active.value = idx !== -1 ? idx : 0;
  },
  { immediate: true }
);
</script>

<style scoped>
:deep(.van-tabs__line) {
  background-color: #b809b8;
}
.tabItem {
  padding: 16px;
  font-size: 14px;
}
</style>
