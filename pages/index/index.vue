<template>
  <div>
    <h2>熱門影片</h2>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id">
        <div class="row">
          <div class="title">{{ item.title }}</div>
          <van-image :src="item.url" fit="cover" radius="8" />
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "@/database/videoSeed";
import { useVideoLocal } from "@/composables/useVideoLocal";
const { indexVideos } = useVideoLocal();

const list = ref<Video[]>([]);
const loading = ref(false);
const finished = ref(false);

const pageSize = 6;

const onLoad = () => {
  setTimeout(() => {
    //初始為0
    const start = list.value.length;
    const next = indexVideos.value.slice(start, start + pageSize);

    list.value.push(...next);

    loading.value = false;

    if (list.value.length >= indexVideos.value.length) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  .van-image {
    width: 60%;
    height: 280px;
    cursor: pointer;
    @media (max-width: 600px) {
      width: 50%;
      height: 140px;
    }
  }
  .title {
    width: 40%;
    text-align: left;
    @media (max-width: 600px) {
      width: 50%;
    }
  }
}
</style>
