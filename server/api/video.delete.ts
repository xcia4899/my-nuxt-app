// server/api/video.delete.ts
import videos from "@/database/video";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ id: number }>(event);

  const index = videos.findIndex((v) => v.id === body.id);
  if (index !== -1) videos.splice(index, 1);

  return { ok: true, id: body.id };
});
