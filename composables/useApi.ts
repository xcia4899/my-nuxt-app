// composables/useApi.ts
export function useApi() {
  const config = useRuntimeConfig();
  const baseURL = (config.public.videoApiBaseURL || "") as string;

  return  $fetch.create({ baseURL });
}
