
<template>
  <div>
    <h2>影片(Nuxt後端驅動)</h2>

    <div style="display: flex; gap: 8px; margin: 12px 0">
      <van-button  type="primary" @click="addVideo"> 新增 </van-button>

      <van-button  @click="reset"> 資料重置 </van-button>
    </div>

    <div v-if="error" style="color: red;">
      讀取失敗：{{ error }}
    </div>

    <van-grid :column-num="2" :gutter="4">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image
          :src="item.url"
          width="100%"
          height="140"
          fit="cover"
          radius="8"
        />
        <div class="title">{{ item.title }}</div>
        <div class="btns">
          <van-button size="small" type="warning" @click="editVideo(item.id)">
            <span class="btn-text"> 更新</span>
          </van-button>
          <van-button size="small" type="danger" @click="removeVideo(item.id)">
            <span class="btn-text"> 刪除</span>
          </van-button>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script setup lang="ts">
import type { Video } from "@/database/videoSeed";
import { useVideoApi } from "@/composables/useVideoApi";

// 用 useFetch 讀取資料（狀態交給 useFetch）
const { data, pending, error, refresh } = await useFetch<Video[]>(
  "/api/games",
  { default: () => [] }
);

const list = computed(() => data.value ?? []);

// 寫入操作交給 API composable
const { createVideo, updateVideo, deleteVideo, resetVideos } = useVideoApi();

// 新增影片
const addVideo = async () => {
  try {
    await createVideo({
      id: Date.now(),
      title: "新影片",
      url: "https://picsum.photos/400/300?new",
    });
    await refresh();
  } catch (err) {
    console.error("新增影片失敗", err);
  }
};

// 更新影片
const editVideo = async (id: number) => {
  try {
    const t = Date.now();
    await updateVideo({
      id,
      title: `圖片 ${id}（更新）`,
      url: `https://picsum.photos/400/300?updated=${t}`,
    });
    await refresh();
  } catch (err) {
    console.error("更新影片失敗", err);
  }
};

// 刪除影片
const removeVideo = async (id: number) => {
  try {
    await deleteVideo(id);
    await refresh();
  } catch (err) {
    console.error("刪除影片失敗", err);
  }
};

// 重置資料
const reset = async () => {
  try {
    await resetVideos();
    await refresh();
  } catch (err) {
    console.error("重置影片失敗", err);
  }
};
</script>


<style scoped>
.title {
  margin-top: 6px;
  font-size: 18px;
  line-height: 1.2;
  margin: 12px 0;
}
.btns {
  display: flex;
  gap: 8px;

  .btn-text {
    font-size: 12px;
  }
}
</style>
