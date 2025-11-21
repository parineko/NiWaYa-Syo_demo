# 庭や・笑 ウェブサイト Astro版

このプロジェクトは、HTML版の「庭や・笑」ウェブサイトをAstroフレームワークで再構築したものです。

## プロジェクト構成

```
page_astro_version/
├── src/
│   ├── components/
│   │   ├── Header.astro      # ヘッダーコンポーネント
│   │   └── Footer.astro      # フッターコンポーネント
│   ├── layouts/
│   │   └── BaseLayout.astro  # ベースレイアウト
│   ├── pages/
│   │   ├── index.astro
│   │   ├── case-stady.astro
│   │   ├── prices.astro
│   │   ├── trouble.astro
│   │   ├── until-construction.astro
│   │   ├── contact.astro
│   │   ├── sitemap.astro
│   │   ├── garden-tile.astro
│   │   ├── bamboo-fence.astro
│   │   └── shop-garden.astro
│   └── styles/
│       ├── base.css          # メインスタイル（styles.cssから移植）
│       └── extra.css          # 追加スタイル（post-8.cssから移植）
├── public/
│   └── images/               # 画像ファイル（元フォルダのimages/originalからコピー）
├── package.json
├── astro.config.mjs
└── README.md
```

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ビルド:
```bash
npm run build
```

4. プレビュー:
```bash
npm run preview
```

## 主な変更点

- HTML版からAstro版への移植
- 画像パスを `images/original/` から `/images/` に統一
- HTMLリンクをAstroのルーティングに変更（`.html` → `/`）
- Header/Footerをコンポーネント化
- BaseLayoutで共通レイアウトを実装
- JavaScriptを`<script is:inline>`でBaseLayoutに統合

## 技術スタック

- Astro 4.0+
- HTML5
- CSS3
- Vanilla JavaScript

## 注意事項

- 画像ファイルは `public/images/` に配置されています
- CSSファイルは `src/styles/` に配置されています
- すべてのページは `src/pages/` に配置されています

