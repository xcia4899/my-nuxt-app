import type { Video } from "@/database/videoSeed";

export const useLivetApi = () => {
  const api = useApi();

  const getLive = () => api<Video[]>("/api/videos");

  const createLive = (body: Video) =>
    api<Video>("/api/videos", { method: "POST", body });

  const updateLive = (body: Video) =>
    api<Video>("/api/videos", { method: "PUT", body });

  const deleteLive = (id: number) =>
    api(`/api/videos/${id}`, { method: "DELETE" });

  const resetLive = () =>
    api<Video[]>("/api/videos/reset", { method: "POST" });

  return { getLive, createLive, updateLive, deleteLive, resetLive };
};
