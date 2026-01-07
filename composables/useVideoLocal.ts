import { videoSeed ,indexSeed, type Video } from "@/database/videoSeed";

export const useVideoLocal = () => {
  const videos = useState<Video[]>("videos", () => structuredClone(videoSeed));

  const indexVideos = ref<Video[]>( structuredClone(indexSeed));

  const getVideos = computed(() => videos.value)
  const getIndexVideos = computed(() =>indexVideos.value)

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
    indexVideos,
    getVideos,
    getIndexVideos,
    createVideo,
    updateVideo,
    deleteVideo,
    resetVideos,
  };
};
