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
架構

前端：Nuxt（用 $fetch.create 統一呼叫 API）

後端：Node + Express（Render Web Service）

資料庫：Render Postgres

連線方式：後端用 DATABASE_URL 環境變數連 DB

Render 設定重點

建立 Postgres（Region 與 Web Service 同區，例如 Singapore）

Web Service（Node）

Build Command：npm ci && npm run build

Start Command：npm start

Web Service → Environment Variables

Key：DATABASE_URL

Value：Postgres 的 Internal Database URL

修改 env 後要 Save, rebuild, and deploy

API 清單（後端）

GET /health：健康檢查

GET /api/videos：取得列表

POST /api/videos：新增（body: Video）

PUT /api/videos：更新（body: Video）

DELETE /api/videos/:id：刪除

POST /api/videos/reset：重置資料（回 seed）

常見狀況

Free 方案冷啟動：第一次呼叫可能會慢（服務在喚醒）

如果看到 Missing DATABASE_URL env var：

Web Service 沒設 DATABASE_URL 或 key 打錯（例如 DATABASE__URL）
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


