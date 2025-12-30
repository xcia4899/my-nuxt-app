import { videoRepo } from "@/database/video";
import type { Video } from "@/database/videoSeed";

// PUT /api/video
// 更新影片資料
export default defineEventHandler(async (event) => {
  // 讀取請求 body（更新後的影片資料）
  const body = await readBody<Video>(event);

  // 呼叫資料層更新影片
  const updated = videoRepo.updateVideo(body);

  // 找不到影片時回傳 404
  if (!updated) {
    throw createError({
      statusCode: 404,
      statusMessage: "Video not found",
    });
  }

  // 回傳更新後的影片
  return updated;
});

