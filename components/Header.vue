<template>
  <van-nav-bar :border="false" :fixed="true" placeholder >
    <!-- 左邊：名稱/Logo -->
    <template #left>
      <span class="brand">
        <van-icon name="live" size="28" />
      </span>
    </template>
    <!-- 中間：留白（不放 title 也可以） -->
    <template #title>
      <span class="spacer" >Horizon-Video</span>
    </template>
    <!-- 右邊：搜尋/登入等 -->
    <template #right>
      <div class="actions">
        <van-icon name="search" size="20" />
        <van-icon name="user-o" size="20" />
      </div>
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.brand {
  font-weight: 600;
  font-size: 20px;
  .van-badge__wrapper {
    color: #eb3eeb;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
  .van-badge__wrapper {
    color: #970297;
  }
}

.spacer {
  display: block;
  font-weight: 600;
  font-size: 20px;
  color: #970297;
}
</style>
