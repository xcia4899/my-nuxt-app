# Nuxt 3 分類內容瀏覽專案（Vant 4）

本專案以 **Nuxt 3** 為核心框架，搭配 **Vant 4 UI 元件庫**，實作一個以「**資料驅動（Data-driven UI）**」為設計核心的分類內容瀏覽介面。

透過 **動態路由（Dynamic Routes）** 搭配 Tabs 元件，實現「**單一頁面即可依據路由參數切換不同分類內容**」的架構設計，有效降低頁面重複、提升可維護性與擴充性。

---

## 專案特色

- 單一動態頁面處理多分類內容
- Tabs 切換與 URL 路由狀態同步
- 重新整理或直接輸入網址仍可正確顯示畫面
- 新增分類僅需修改資料設定，無須新增頁面檔案

---

## 技術重點

- **Nuxt 3**
  - 使用 Composition API 與 `<script setup>`
  - 採用 pages router 管理路由結構

- **Vant 4**
  - 建立行動裝置友善的 Tabs 操作介面
  - 搭配 Nuxt 3 進行元件整合

- **資料驅動設計（Data-driven UI）**
  - Tabs、分類與路由皆由資料結構產生
  - 減少硬編碼，提高彈性與擴充性

- **動態路由設計**
  - 使用 `/category/[type]` 動態路由
  - 依 `route.params.type` 切換分類內容

- **狀態同步**
  - 畫面狀態與 URL 狀態保持一致
  - 確保使用者操作與導覽體驗穩定

---


- `[type]` 為分類參數（如 hot、video、game）
- 頁面內容依路由參數動態渲染

---

## 環境需求

- Node.js 18+（建議）
- npm / pnpm / yarn / bun 其一

---

## 專案啟動

### 安裝依賴

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install


