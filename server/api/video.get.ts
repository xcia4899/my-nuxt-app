// server/api/video.get.ts
import videos from "@/database/video";

export default defineEventHandler(() => {
    //來自資料庫或是遠端
    // const videos = await db.video.findMany();
  return videos;
});
