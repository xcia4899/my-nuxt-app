import { videoRepo } from "@/database/video";
import type { Video } from "@/database/videoSeed";

export default defineEventHandler(async (event) => {
  const body = await readBody<Video>(event);
  return videoRepo.addVideo(body);
});
