// database/video.ts
import { videoSeed, type Video } from "@/database/videoSeed";

let videos: Video[] = structuredClone(videoSeed);

export const videoRepo = {
  getVideos: () => videos,

  addVideo: (video: Video) => {
    videos.push(video);
    return video;
  },

  updateVideo: (video: Video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    if (index === -1) return null;
    videos[index] = video;
    return video;
  },

  deleteVideo: (id: number) => {
    const index = videos.findIndex((v) => v.id === id);
    if (index === -1) return { ok: false, id };
    videos.splice(index, 1);
    return { ok: true, id };
  },

  resetVideos: () => {
    videos = structuredClone(videoSeed);
    return videos;
  },
};
