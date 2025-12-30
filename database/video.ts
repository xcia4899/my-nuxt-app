// database/video.ts
export type Video = { id: number; title: string; url: string };

const videoSeed: Video[] = [
  { id: 1, title: "圖片一", url: "https://picsum.photos/400/300?new=1" },
  { id: 2, title: "圖片二", url: "https://picsum.photos/400/300?new=2" },
  { id: 3, title: "圖片三", url: "https://picsum.photos/400/300?new=3" },
  { id: 4, title: "圖片四", url: "https://picsum.photos/400/300?new=4"},
  { id: 5, title: "圖片五", url: "https://picsum.photos/400/300?new=5" },
  { id: 6, title: "圖片六", url: "https://picsum.photos/400/300?new=6" },
  { id: 7, title: "圖片七", url: "https://picsum.photos/400/300?new=7" },
];

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
