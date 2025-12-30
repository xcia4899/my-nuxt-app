<template>
  <div>
    <h2>影片(本地資料，無後端)</h2>

    <div style="display: flex; gap: 8px; margin: 12px 0">
      <van-button  type="primary" @click="addVideo"> 新增 </van-button>

      <van-button  @click="reset"> 資料重置 </van-button>
    </div>

    <!-- <div v-if="error" style="color: red;">
      讀取失敗：{{ error }}
    </div> -->

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
import { useVideoLocal } from "@/composables/useVideoLocal";

// GET：列表狀態交給 useFetch（含 SSR / pending / error / refresh）
// const { data: list, pending, error, refresh } = await useFetch<Video[]>(
//   "/api/video",
//   { default: () => [] }
// );

// Action：寫入交給 useVideoApi（薄封裝）
const {
  videos: list,
  createVideo,
  updateVideo,
  deleteVideo,
  resetVideos,
} = useVideoLocal();

const addVideo = async () => {
  try {
    
    await createVideo({
      id: Date.now(),
      title: "新影片",
      url: "https://picsum.photos/400/300?random",
    });
  } catch (err) {
    console.error("新增失敗", err);
  }
};

const editVideo = async (id:number) => {
  try {
    const item = Date.now();
    await updateVideo({
      id: id,
      title: `圖片 ${id}（更新）`,
      url:  `https://picsum.photos/400/300?updated=${item}`,
    });
  } catch (err) {
    console.error("更新失敗", err);
  }
};

const removeVideo = async (id:number) => {
  try {
    await deleteVideo(id);
  } catch (err) {
    console.error("刪除失敗", err);
  }
};
const reset = async () => {
  try {
    await resetVideos(); // 重製資料到 seed
  } catch (err) {
    console.error("重製失敗", err);
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
