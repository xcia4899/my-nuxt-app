// composables/useVideoApi.ts
import type { Video } from "@/database/video";

export const useVideoApi = () => {
  const config = useRuntimeConfig();
  const baseURL = (config.public.videoApiBaseURL || "") as string;

  const api = $fetch.create({ baseURL });

  const getVideos = () => api<Video[]>("/api/video");
  const createVideo = (body: Video) =>
    api<Video>("/api/video", { method: "POST", body });

  const updateVideo = (body: Video) =>
    api<Video>("/api/video", { method: "PUT", body });

  const deleteVideo = (id: number) =>
    api<{ ok: boolean; id: number }>("/api/video", {
      method: "DELETE",
      body: { id }, 
    });

  return { getVideos, createVideo, updateVideo, deleteVideo };
};
