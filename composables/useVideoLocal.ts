import { videoSeed, type Video } from "@/database/videoSeed";

export const useVideoLocal = () => {
  const videos = useState<Video[]>("videos", () => structuredClone(videoSeed));

  const getVideos = () => videos.value;

  const createVideo = (body: Video) => {
    videos.value.push(body);
    return body;
  };

  const updateVideo = (body: Video) => {
    const i = videos.value.findIndex((v) => v.id === body.id);
    if (i === -1) return null;
    videos.value[i] = body;
    return body;
  };

  const deleteVideo = (id: number) => {
    videos.value = videos.value.filter((v) => v.id !== id);
    return { ok: true, id };
  };

  const resetVideos = () => {
    videos.value = structuredClone(videoSeed);
    return videos.value;
  };

  return {
    videos,
    getVideos,
    createVideo,
    updateVideo,
    deleteVideo,
    resetVideos,
  };
};
