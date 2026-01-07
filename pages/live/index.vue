<template>
  <div>
    <h2>生活(render後端驅動)</h2>

    <div style="display: flex; gap: 8px; margin: 12px 0">
      <van-button type="primary"  @click="addVideo">
        新增
      </van-button>

      <van-button  @click="reset">資料重置</van-button>
    </div>

    <div v-if="errorMsg" style="color: red">讀取失敗：{{ errorMsg }}</div>

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
          <van-button
            size="small"
            type="warning"
            :loading="pending"
            @click="editVideo(item.id)"
          >
            <span class="btn-text">更新</span>
          </van-button>
          <van-button
            size="small"
            type="danger"
            :loading="pending"
            @click="removeVideo(item.id)"
          >
            <span class="btn-text">刪除</span>
          </van-button>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "@/database/videoSeed";
import { useLivetApi } from "~/composables/useLiveApi";

const { getLive, createLive, updateLive, deleteLive, resetLive } =
  useLivetApi();

const pending = ref(false);
const errorMsg = ref("");
const list = ref<Video[]>([]);

const load = async () => {
  pending.value = true;
  errorMsg.value = "";
  try {
    list.value = await getLive();
  } catch (e: any) {
    errorMsg.value = e?.message ?? "讀取失敗";
  } finally {
    pending.value = false;
  }
};

onMounted(load);

// 新增影片
const addVideo = async () => {
  pending.value = true;
  errorMsg.value = "";
  try {
    const t = Date.now();
    await createLive({
      id: t,
      title: "新影片",
      url: `https://picsum.photos/400/300?new=${t}`,
    });
    await load();
  } catch (err: any) {
    errorMsg.value = err?.message ?? "新增影片失敗";
  } finally {
    pending.value = false;
  }
};

// 更新影片
const editVideo = async (id: number) => {
  pending.value = true;
  errorMsg.value = "";
  try {
    const t = Date.now();
    await updateLive({
      id,
      title: `圖片 ${id}（更新）`,
      url: `https://picsum.photos/400/300?updated=${t}`,
    });
    await load();
  } catch (err: any) {
    errorMsg.value = err?.message ?? "更新影片失敗";
  } finally {
    pending.value = false;
  }
};

// 刪除影片
const removeVideo = async (id: number) => {
  pending.value = true;
  errorMsg.value = "";
  try {
    await deleteLive(id);
    await load();
  } catch (err: any) {
    errorMsg.value = err?.message ?? "刪除影片失敗";
  } finally {
    pending.value = false;
  }
};

// 重置資料
const reset = async () => {
  pending.value = true;
  errorMsg.value = "";
  try {
    await resetLive();
    await load();
  } catch (err: any) {
    errorMsg.value = err?.message ?? "重置影片失敗";
  } finally {
    pending.value = false;
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
