# Yuuki | Portfolio & Link Hub (ポートフォリオ兼リンク紹介サイト)

モダンな 2026年デザイン基準のポートフォリオ兼リンク集（Link-in-bio）サイトです。  
スマホ表示ではリンクツリーとして、PC表示ではリッチなBento Gridポートフォリオとして最適化されています。

---

## 🌟 主な特徴

- **2-in-1 ハイブリッド構成**:
  - **リンク集（Link Hub / Link-in-bio）**: X (旧Twitter)、GitHub、Zenn、Webアプリなどへのダイレクトリンク
  - **ポートフォリオ（Featured Works）**: 制作実績（推しサポ、AITuber、macOSアプリ群、Cエディタ等）のショーケースとモーダル詳細
- **データ一元管理**:
  - `src/data/portfolioData.ts` を編集するだけで、SNSリンク・プロフィール・制作物・スキルを簡単に更新可能
- **2026 Modern Design & Glassmorphism**:
  - 洗練されたグラスモーフィズム、ダーク / ライトテーマ対応（LocalStorage保存）
  - 各種リンクのワンクリックURLコピー＆トースト通知
  - Web Share API対応のサイト共有機能
  - カテゴリ絞り込み & キーワードリアルタイム検索
- **超軽量・超高速ビルド**:
  - React 19 + TypeScript + Vite 8 + Tailwind CSS v4 (@tailwindcss/vite)
  - ゼロ警告・ゼロエラーの厳格な型安全と最適化バンドル（Gzip時 約86KB）

---

## 📁 ディレクトリ構成

```text
My_portfoliosite/
├── index.html                 # メタデータ・ファビコン設定
├── package.json               # 依存関係
├── vite.config.ts             # Vite + Tailwind CSS設定
├── src/
│   ├── types.ts               # 型定義（Profile, Project, Link, Skill）
│   ├── data/
│   │   └── portfolioData.ts   # プロフィール・リンク・作品の一括設定ファイル
│   ├── components/
│   │   ├── Header.tsx         # ナビゲーションバー・テーマ切替・共有
│   │   ├── ProfileHero.tsx    # アバター・ステータス・概要
│   │   ├── LinkHub.tsx        # リンク集カード
│   │   ├── WorksSection.tsx   # 制作実績（検索・カテゴリ分類・カード）
│   │   ├── ProjectModal.tsx   # 作品詳細モーダル
│   │   ├── SkillsSection.tsx  # スキル一覧
│   │   ├── AboutSection.tsx   # 理念・メッセージ
│   │   ├── ContactSection.tsx # お問い合わせ・メールコピー
│   │   ├── Footer.tsx         # フッター
│   │   ├── Toast.tsx          # 通知トースト
│   │   └── Icons.tsx          # SVGアイコン
│   ├── App.tsx                # メインページ
│   ├── index.css              # Tailwind CSS & スタイル
│   └── main.tsx               # エントリーポイント
```

---

## ⚙️ データのカスタマイズ方法

`src/data/portfolioData.ts` を開くだけで、以下の内容を直感的に書き換えることができます：

1. **`userProfile`**: お名前、自己紹介、肩書き、メールアドレス、ステータス
2. **`socialLinks`**: SNSリンク、ブログURL、アイコン、バッジ
3. **`projects`**: 制作したアプリのタイトル、概要、詳細、タグ、リンク（GitHub/デモ）
4. **`skillCategories`**: フロントエンド、macOS/Swift、AI/バックエンドのスキル

---

## 🚀 コマンド一覧

```bash
# 開発サーバー起動（※ご指示により現在は未起動）
npm run dev

# 本番用ビルド（dist/ を出力）
npm run build

# ビルド成果物のローカルプレビュー
npm run preview

# 静的コードチェック
npm run lint
```
