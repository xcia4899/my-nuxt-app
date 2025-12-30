<template>
  <div>
    <h2>遊戲</h2>

    <div style="display: flex; gap: 8px; margin: 12px 0;">
      <van-button type="primary" :loading="pending" @click="addVideo">
        新增
      </van-button>
      <van-button type="warning" :loading="pending" @click="editVideo">
        更新 id=1
      </van-button>
      <van-button type="danger" :loading="pending" @click="removeVideo">
        刪除 id=2
      </van-button>
      <van-button :loading="pending" @click="refresh">
        重新抓取
      </van-button>
    </div>

    <div v-if="error" style="color: red;">
      讀取失敗：{{ error }}
    </div>

    <van-grid :column-num="3" :gutter="4" square>
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image
          :src="item.url"
          width="100%"
          height="140"
          fit="cover"
          radius="8"
        />
        <div class="title">{{ item.title }}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "@/database/video";
import { useVideoApi } from "@/composables/useVideoApi";

// GET：列表狀態交給 useFetch（含 SSR / pending / error / refresh）
const { data: list, pending, error, refresh } = await useFetch<Video[]>(
  "/api/video",
  { default: () => [] }
);

// Action：寫入交給 useVideoApi（薄封裝）
const { createVideo, updateVideo, deleteVideo } = useVideoApi();

const addVideo = async () => {
  try {
    await createVideo({
      id: Date.now(),
      title: "新影片",
      url: "https://picsum.photos/400/300?new",
    });
    await refresh();
  } catch (err) {
    console.error("新增失敗", err);
  }
};

const editVideo = async () => {
  try {
    await updateVideo({
      id: 1,
      title: "影片 A（更新）",
      url: "https://picsum.photos/400/300?updated",
    });
    await refresh();
  } catch (err) {
    console.error("更新失敗", err);
  }
};

const removeVideo = async () => {
  try {
    await deleteVideo(2);
    await refresh();
  } catch (err) {
    console.error("刪除失敗", err);
  }
};
</script>

<style scoped>
.title {
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.2;
}
</style>
