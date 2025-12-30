// composables/useVideoApi.ts
import type { Video } from "@/database/videoSeed";

export const useVideoApi = () => {
 
  const api = useApi();

  const getVideos = () => api<Video[]>("/api/games");
  
  const createVideo = (body: Video) =>
    api<Video>("/api/games", { method: "POST", body });

  const updateVideo = (body: Video) =>
    api<Video>("/api/games", { method: "PUT", body });

  const deleteVideo = (id: number) =>
    api(`/api/games/${id}`, { method: "DELETE" });
    
  const resetVideos = () => api<Video[]>("/api/games/index.reset", { method: "POST" });

  return { getVideos, createVideo, updateVideo, deleteVideo ,resetVideos};
};
