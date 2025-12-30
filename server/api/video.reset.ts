import { resetVideos } from "@/database/video";

export default defineEventHandler(() => {
  return resetVideos();
});
