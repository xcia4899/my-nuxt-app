// server/api/video/[id].delete.ts
import videos from "@/database/video";

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, "id"));

  const index = videos.findIndex((v) => v.id === id);
  if (index !== -1) videos.splice(index, 1);

  return { ok: true, id };
});
