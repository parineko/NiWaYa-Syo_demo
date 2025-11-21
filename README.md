# 庭や・笑 ウェブサイト（Astro版）

福岡県粕屋の造園業「庭や・笑」の公式ウェブサイト。Astroフレームワークを使用した静的サイトジェネレーターで構築されています。

## 📋 プロジェクト概要

このプロジェクトは、HTML版の「庭や・笑」ウェブサイトをAstroフレームワークで再構築したものです。モダンな開発体験とパフォーマンス最適化を実現しています。

## 📊 プロジェクト統計

### ファイル構成と行数

**スタイルファイル**
- `src/styles/base.css`: **1,616行** ⚠️ 要分割
- `src/styles/extra.css`: 2行

**レイアウト・コンポーネント**
- `src/layouts/BaseLayout.astro`: 132行
- `src/components/CaseStudySlider.astro`: 154行
- `src/components/HeroSlider.astro`: 156行
- `src/components/FloatingContactButton.astro`: 84行
- `src/components/Header.astro`: 40行
- `src/components/Footer.astro`: 14行
- `src/components/PageHeader.astro`: 13行

**ページファイル**
- `src/pages/prices.astro`: 163行
- `src/pages/about.astro`: 93行
- `src/pages/contact.astro`: 76行
- `src/pages/trouble.astro`: 62行
- `src/pages/tree-pruning.astro`: 47行
- `src/pages/bamboo-fence-renovation.astro`: 47行
- `src/pages/weed-sheet-gravel.astro`: 47行
- `src/pages/concrete-floor.astro`: 47行
- `src/pages/garden-tile.astro`: 45行
- `src/pages/garden-pruning.astro`: 44行
- `src/pages/shop-garden.astro`: 44行
- `src/pages/bamboo-fence.astro`: 40行
- `src/pages/kadomatsu.astro`: 37行
- `src/pages/index.astro`: 27行
- `src/pages/case-stady.astro`: 19行

**スクリプト**
- `src/scripts/initCaseStudySlider.ts`: 29行
- `src/scripts/initHeroSlider.ts`: 21行

**合計**: 約3,100行（コメント・空行含む）

## 🚀 セットアップ

### 必要な環境

- Node.js 18.0.0 以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動（http://localhost:4321）
npm run dev
```

### ビルド

```bash
# 本番用ビルド
npm run build
```

### プレビュー

```bash
# ビルド後のプレビュー
npm run preview
```

## 📁 プロジェクト構成

```
page_astro_version/
├── src/
│   ├── components/          # 再利用可能なコンポーネント
│   │   ├── CaseStudySlider.astro (154行)
│   │   ├── FloatingContactButton.astro (84行)
│   │   ├── Footer.astro (14行)
│   │   ├── Header.astro (40行)
│   │   ├── HeroSlider.astro (156行)
│   │   └── PageHeader.astro (13行)
│   ├── layouts/            # レイアウトコンポーネント
│   │   └── BaseLayout.astro (132行)
│   ├── pages/              # ページファイル（ルーティング）
│   │   ├── index.astro (27行)
│   │   ├── about.astro (93行)
│   │   ├── case-stady.astro (19行)
│   │   ├── prices.astro (163行)
│   │   ├── trouble.astro (62行)
│   │   ├── contact.astro (76行)
│   │   └── [個別施工例ページ 9件: 37-47行]
│   ├── scripts/            # TypeScriptスクリプト
│   │   ├── initCaseStudySlider.ts (29行)
│   │   └── initHeroSlider.ts (21行)
│   └── styles/             # スタイルシート
│       ├── base.css (1,616行) ⚠️
│       └── extra.css (2行)
├── public/                 # 静的ファイル
│   └── images/            # 画像ファイル
├── package.json
├── astro.config.mjs
└── README.md
```

## 🛠️ 技術スタック

- **フレームワーク**: Astro 4.0+
- **スタイリング**: CSS3（カスタム）
- **スライダー**: Swiper.js 11.0+
- **フォント**: 
  - Noto Serif JP
  - Shippori Mincho
  - Zen Old Mincho
- **ビルドツール**: Vite（Astro内蔵）

## 📄 ページ一覧

- `/` - トップページ（ヒーロースライダー、モットー）
- `/about` - 庭や笑について（スタッフ紹介、お客様の声）
- `/case-stady` - 施工例一覧
- `/prices` - 料金表
- `/trouble` - お庭でお困りの方へ（ご依頼の流れ）
- `/contact` - お問い合わせ
- `/garden-pruning` - 施工例：庭の剪定
- `/tree-pruning` - 施工例：高木の剪定
- `/weed-sheet-gravel` - 施工例：防草シート・砂利
- `/garden-tile` - 施工例：庭のタイル
- `/bamboo-fence` - 施工例：竹垣
- `/bamboo-fence-renovation` - 施工例：竹垣リフォーム
- `/shop-garden` - 施工例：店舗の坪庭
- `/concrete-floor` - 施工例：コンクリート土間
- `/kadomatsu` - 施工例：門松

## 🎨 デザインの特徴

- **ミニマルデザイン**: 職人・高級感を重視したシンプルなデザイン
- **統一されたフォント**: ページ全体で一貫したフォント指定
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **アクセシビリティ**: セマンティックHTMLと適切なARIA属性

## 🔧 開発ガイドライン

### コンポーネントの追加

新しいコンポーネントは `src/components/` に `.astro` ファイルとして作成します。

### スタイルの追加

- グローバルスタイル: `src/styles/base.css`
- 追加スタイル: `src/styles/extra.css`（必要に応じて）

### 画像の追加

画像ファイルは `public/images/` に配置し、パスは `/images/ファイル名` で参照します。

### ページの追加

新しいページは `src/pages/` に `.astro` ファイルとして作成します。ファイル名がそのままURLパスになります。

## 📝 注意事項

- 画像ファイルは `public/images/` に配置されています
- CSSファイルは `src/styles/` に配置されています
- すべてのページは `src/pages/` に配置されています
- コンポーネントは `src/components/` に配置されています

## 🐛 トラブルシューティング

### 開発サーバーが起動しない

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

### ビルドエラー

```bash
# キャッシュをクリア
rm -rf .astro dist
npm run build
```

### スタイルが適用されない

- `BaseLayout.astro` でスタイルが正しくインポートされているか確認
- ブラウザのキャッシュをクリア

## 📞 お問い合わせ

プロジェクトに関する質問や問題がある場合は、開発チームまでお問い合わせください。

---

© 2024 庭や・笑 All rights reserved.
