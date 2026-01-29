import { createApp, ref } from "vue";

/**
 * 共通のタブ用データと createPhotos を返す
 */
export function getSharedTabData() {
  const activeTabIndex = ref(0);

  const createPhotos = (seed, count = 6) =>
    Array.from({ length: count }, (_, i) => ({
      src: `https://picsum.photos/seed/${seed}-${i + 1}/300/300`,
    }));

  const tabs = [
    { id: "tab-1", label: "風景", panelId: "p1" },
    { id: "tab-2", label: "トラベル", panelId: "p2" },
    { id: "tab-3", label: "動物", panelId: "p3" },
    { id: "tab-4", label: "Architecture", panelId: "p4" },
  ];

  const panels = [
    {
      id: "p1",
      title: "風景写真",
      description:
        "美しい自然の風景を集めました。左右にスワイプして他のカテゴリーもご覧ください。",
      photos: createPhotos("landscape"),
    },
    {
      id: "p2",
      title: "人物写真",
      description: "ポートレート写真のコレクションです。",
      photos: createPhotos("portrait"),
    },
    {
      id: "p3",
      title: "動物写真",
      description:
        "かわいい動物たちの写真です。スワイプで他のカテゴリーに移動できます。",
      photos: createPhotos("animal"),
    },
    {
      id: "p4",
      title: "Architecture",
      description: "モダンな建築物の写真集です。",
      photos: createPhotos("architecture"),
    },
  ];

  return { activeTabIndex, tabs, panels, createPhotos };
}

/**
 * 共通のタブUIアプリを作成する。
 * @param {() => Object} [extraSetup] - ページ固有の setup 戻り値を返す関数（省略可）
 * @returns {import('vue').App}
 */
export function createTabApp(extraSetup = () => ({})) {
  return createApp({
    setup() {
      const shared = getSharedTabData();
      const extra = extraSetup();
      return { ...shared, ...extra };
    },
  });
}
