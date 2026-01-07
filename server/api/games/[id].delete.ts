import { videoRepo } from "@/database/video";

// DELETE /api/video/:id
// 依照路由參數 id 刪除指定影片
export default defineEventHandler((event) => {
  // 從路由參數取得 id，並轉成 number
  // const { id } = event.context.params || {}
  const id = Number(getRouterParam(event, "id"));

  if (!Number.isInteger(id) || id <= 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid id",
    });
  }

  // 呼叫資料層刪除影片並回傳結果
  return videoRepo.deleteVideo(id);
});
