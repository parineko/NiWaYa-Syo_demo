# 庭や・笑 ウェブサイト（Astro版）

福岡県粕屋の造園業「庭や・笑」の公式ウェブサイト。Astroフレームワークを使用した静的サイトジェネレーターで構築されています。

## 📋 プロジェクト概要

このプロジェクトは、HTML版の「庭や・笑」ウェブサイトをAstroフレームワークで再構築したものです。モダンな開発体験とパフォーマンス最適化を実現しています。

## 📊 プロジェクト統計

### ファイル構成と行数（最新）

**スタイルファイル**
- `src/styles/base.css`: **1,631行** ⚠️ 要分割
- `src/styles/extra.css`: 2行

**レイアウト・コンポーネント**
- `src/layouts/BaseLayout.astro`: 132行
- `src/components/HeroSlider.astro`: 156行
- `src/components/CaseStudySlider.astro`: 154行
- `src/components/FloatingContactButton.astro`: 84行
- `src/components/Header.astro`: 40行
- `src/components/Footer.astro`: 14行
- `src/components/PageHeader.astro`: 13行

**ページファイル（15ページ）**
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

**その他**
- `src/env.d.ts`: 1行

**合計**: 約3,115行（27ファイル、コメント・空行含む）

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
# または
npm start
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
│   ├── components/          # 再利用可能なコンポーネント（6ファイル）
│   │   ├── CaseStudySlider.astro (154行)
│   │   ├── FloatingContactButton.astro (84行)
│   │   ├── Footer.astro (14行)
│   │   ├── Header.astro (40行)
│   │   ├── HeroSlider.astro (156行)
│   │   └── PageHeader.astro (13行)
│   ├── layouts/            # レイアウトコンポーネント（1ファイル）
│   │   └── BaseLayout.astro (132行)
│   ├── pages/              # ページファイル（15ページ）
│   │   ├── index.astro (27行) - トップページ
│   │   ├── about.astro (93行) - 会社について
│   │   ├── case-stady.astro (19行) - 施工例一覧
│   │   ├── prices.astro (163行) - 料金表
│   │   ├── trouble.astro (62行) - お庭でお困りの方へ
│   │   ├── contact.astro (76行) - お問い合わせ
│   │   └── [個別施工例ページ 9件: 37-47行]
│   │       ├── garden-pruning.astro (44行)
│   │       ├── tree-pruning.astro (47行)
│   │       ├── weed-sheet-gravel.astro (47行)
│   │       ├── garden-tile.astro (45行)
│   │       ├── bamboo-fence.astro (40行)
│   │       ├── bamboo-fence-renovation.astro (47行)
│   │       ├── shop-garden.astro (44行)
│   │       ├── concrete-floor.astro (47行)
│   │       └── kadomatsu.astro (37行)
│   ├── scripts/            # TypeScriptスクリプト（2ファイル）
│   │   ├── initCaseStudySlider.ts (29行)
│   │   └── initHeroSlider.ts (21行)
│   └── styles/             # スタイルシート（2ファイル）
│       ├── base.css (1,631行) ⚠️ 要分割
│       └── extra.css (2行)
├── public/                 # 静的ファイル
│   └── images/            # 画像ファイル（50+ファイル）
├── package.json
├── astro.config.mjs
└── README.md
```

## 🛠️ 技術スタック

- **フレームワーク**: Astro 4.0+
- **スタイリング**: CSS3（カスタム）
- **スライダー**: Swiper.js 11.0+
- **フォント**: 
  - Noto Serif JP（本文）
  - Shippori Mincho（見出し）
  - Zen Old Mincho（装飾テキスト）
- **ビルドツール**: Vite（Astro内蔵）
- **出力形式**: 静的サイト（Static Site Generation）

## 📄 ページ一覧

### メインページ
- `/` - トップページ（ヒーロースライダー、モットー）
- `/about` - 庭や笑について（スタッフ紹介、お客様の声、作業風景）
- `/case-stady` - 施工例一覧（スライダー形式）
- `/prices` - 料金表（剪定、伐採、消毒・除草・防草工事、庭工事）
- `/trouble` - お庭でお困りの方へ（お困りごと、ご依頼の流れ）
- `/contact` - お問い合わせ（Googleフォーム、電話・メール）

### 個別施工例ページ（9ページ）
- `/garden-pruning` - 庭の剪定
- `/tree-pruning` - 高木の剪定
- `/weed-sheet-gravel` - 防草シート・砂利
- `/garden-tile` - 庭のタイル
- `/bamboo-fence` - 竹垣
- `/bamboo-fence-renovation` - 竹垣リフォーム
- `/shop-garden` - 店舗の坪庭
- `/concrete-floor` - コンクリート土間
- `/kadomatsu` - 門松・正月飾り

## 🎨 デザインの特徴

- **ミニマルデザイン**: 職人・高級感を重視したシンプルなデザイン
- **統一されたフォント**: ページ全体で一貫したフォント指定
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **アクセシビリティ**: セマンティックHTMLと適切なARIA属性
- **統一されたボタンスタイル**: すべてのボタンで同じホバーアニメーション
- **統一された料金表デザイン**: すべての料金表で列幅が統一（65% / 35%）

## 🔧 開発ガイドライン

### コンポーネントの追加

新しいコンポーネントは `src/components/` に `.astro` ファイルとして作成します。

**主要コンポーネント:**
- `PageHeader`: ページタイトルとサブタイトル
- `FloatingContactButton`: 右下の固定お問い合わせボタン
- `HeroSlider`: トップページのヒーロースライダー
- `CaseStudySlider`: 施工例一覧のスライダー

### スタイルの追加

- **グローバルスタイル**: `src/styles/base.css`（1,631行）
- **追加スタイル**: `src/styles/extra.css`（予備、現在は空）

**スタイルの特徴:**
- 統一されたカラーパレット（CSS変数使用）
- レスポンシブ対応のメディアクエリ
- アニメーション（fade-up、スライダー）

### 画像の追加

画像ファイルは `public/images/` に配置し、パスは `/images/ファイル名` で参照します。

### ページの追加

新しいページは `src/pages/` に `.astro` ファイルとして作成します。ファイル名がそのままURLパスになります。

**ページテンプレート:**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageHeader from '../components/PageHeader.astro';
import FloatingContactButton from '../components/FloatingContactButton.astro';
---

<BaseLayout title="ページタイトル" currentPage="ページID">
    <PageHeader title="タイトル" subtitle="サブタイトル" />
    
    <!-- コンテンツ -->
    
    <FloatingContactButton currentPage="ページID" />
</BaseLayout>
```

## 📝 主要機能

### スライダー機能
- **HeroSlider**: トップページのヒーロー画像スライダー（Swiper.js使用）
- **CaseStudySlider**: 施工例一覧のスライダー（Swiper.js使用）

### インタラクティブ要素
- **モバイルメニュー**: レスポンシブ対応のハンバーガーメニュー
- **スクロールトップボタン**: ページ下部のスクロールトップ機能
- **スムーススクロール**: アンカーリンクのスムーススクロール
- **フェードインアニメーション**: Intersection Observerを使用したスクロールアニメーション

### 料金表機能
- 統一されたデザイン（列幅: 65% / 35%）
- レスポンシブ対応
- ホバーエフェクト

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
- 開発サーバーを再起動

### スライダーが動作しない

- `client:load` ディレクティブが正しく設定されているか確認
- ブラウザのコンソールでエラーを確認

## 🔄 今後の改善提案

### 優先度: 高
1. **`base.css`の分割**: 1,631行のファイルを機能別に分割（components.css, layout.css, pages.css等）
2. **個別施工例ページのコンポーネント化**: 9ページの重複コードを1つのコンポーネントに統合

### 優先度: 中
3. **`BaseLayout.astro`のJavaScript分離**: HTMLとJavaScriptを分離して保守性を向上
4. **インラインスタイルのCSSクラス化**: インラインスタイルをCSSクラスに移行

### 優先度: 低
5. **TypeScript型定義の追加**: 型安全性の向上
6. **ユーティリティ関数の抽出**: 再利用可能な関数の作成

## 📞 お問い合わせ

プロジェクトに関する質問や問題がある場合は、開発チームまでお問い合わせください。

---

© 2024 庭や・笑 All rights reserved.
