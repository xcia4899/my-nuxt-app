// database/video.ts
import { videoSeed ,type Video } from "@/database/videoSeed";

// 目前資料（可變）
let videos: Video[] = structuredClone(videoSeed);
export default videos

export const getVideos = () => videos;

export const addVideo = (video: Video) => {
  videos.push(video);
  return video;
};

export const updateVideo = (video: Video) => {
  const index = videos.findIndex((v) => v.id === video.id);
  if (index === -1) return null;
  videos[index] = video;
  return video;
};

export const deleteVideo = (id: number) => {
  const index = videos.findIndex((v) => v.id === id);
  if (index === -1) return { ok: false, id };
  videos.splice(index, 1);
  return { ok: true, id };
};

export const resetVideos = () => {
  videos = structuredClone(videoSeed);
  return videos;
};
