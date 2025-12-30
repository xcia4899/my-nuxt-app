// composables/useVideoApi.ts
import type { Video } from "@/database/videoSeed";

export const useVideoApi = () => {
 
  const api = useApi();

  const getVideos = () => api<Video[]>("/api/video");
  
  const createVideo = (body: Video) =>
    api<Video>("/api/video", { method: "POST", body });

  const updateVideo = (body: Video) =>
    api<Video>("/api/video", { method: "PUT", body });

  const deleteVideo = (id: number) =>
    api(`/api/video/${id}`, { method: "DELETE" });
    
  const resetVideos = () => api<Video[]>("/api/video/index.reset", { method: "POST" });

  return { getVideos, createVideo, updateVideo, deleteVideo ,resetVideos};
};
