// server/api/video.post.ts
import videos from "@/database/video";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  videos.push(body);
  return body;
});
