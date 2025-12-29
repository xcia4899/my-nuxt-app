<template>
  <div>
    <h2>遊戲</h2>
  </div>

  <van-grid :column-num="3" :gutter="4" square>
  <van-grid-item v-for="item in list" :key="item.id">
    <van-image
      :src="item.image"
      width="100%"
      height="140"
      fit="cover"
      radius="8"
    />
    <div class="title">{{ item.title }}</div>
  </van-grid-item>
</van-grid>

</template>

<script setup lang="ts">
const list = [
  {
    id: 1,
    title: "圖片一",
    image: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  },
  {
    id: 2,
    title: "圖片二",
    image: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
  },
  {
    id: 3,
    title: "圖片三",
    image: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg",
  },
  {
    id: 4,
    title: "圖片四",
    image: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg",
  },
  {
    id: 5,
    title: "圖片五",
    image: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-5.jpeg",
  },
  {
    id: 6,
    title: "圖片六",
    image: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-6.jpeg",
  },
  {
    id: 7,
    title: "圖片七",
    image: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-7.jpeg",
  },
 
];

</script>

<style scoped></style>
