import { videoRepo } from "@/database/video";

export default defineEventHandler(() => {
  return videoRepo.resetVideos();
});
