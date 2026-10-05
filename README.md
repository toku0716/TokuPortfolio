# Yuuki | Portfolio & Link Hub (ポートフォリオ兼リンク紹介サイト)

ピュアな **HTML / CSS / JavaScript** だけで構築された、超軽量・依存パッケージ不要のポートフォリオ兼リンク集（Link-in-bio）サイトです。  
Node.js やビルドツール（Vite/Webpackなど）を介さずに、ブラウザで `index.html` を開くだけで即座に動作します。GitHub Pagesや各種静的ホスティング（Netlify, Vercel, Cloudflare Pagesなど）にもそのまま配備可能です。

---

## 🌟 主な特徴

- **完全ピュア（No Dependencies / No Build Step）**:
  - React やビルドツールに依存せず、ブラウザ標準の HTML5 / CSS3 / ES6+ のみで動作。
  - 軽量・高速で外部ライブラリの脆弱性やバージョン互換性トラブルがありません。
- **2-in-1 ハイブリッド構成**:
  - **リンク集（Link in Bio）**: X（旧Twitter）、GitHub、Zenn、Webアプリなどへのダイレクトリンクカード。
  - **制作物ショーケース（Featured Works）**: 実際のプロダクト（推しサポ、AITuber App、DevBrowser、macOSアプリ群、C言語エディタなど）のBento Gridギャラリー。
- **リッチなインタラクティブ機能**:
  - **作品詳細モーダル**: カードをクリックすると、特徴リスト・技術スタック・リンクを表示。
  - **キーワード検索 & カテゴリ絞り込み**: リアルタイムで作品をフィルタリング。
  - **ワンクリックURLコピー**: リンクやメールアドレスをクリップボードにコピーし、トースト通知を表示。
  - **サイト共有**: スマートフォンや対応ブラウザでの Web Share API 呼び出しに対応。
  - **ダーク / ライトテーマ**: トグルボタンで切り替え可能（LocalStorageに自動保存）。
  - **ナビゲーション追従**: スクロール位置に応じたアクティブリンクの自動ハイライト。
- **2026 Modern Design**:
  - 美しいグラスモーフィズム（すりガラス効果）、滑らかなアニメーション、アンビエントグラデーション。

---

## 📁 ディレクトリ構成

```text
My_portfoliosite/
├── index.html       # 全ページの骨格・コンテンツ・セクション構成
├── css/
│   └── style.css    # グラスモーフィズム・レスポンシブ・ダークテーマ等のCSS
├── js/
│   └── script.js    # テーマ切替・検索・フィルタ・モーダル・コピー処理
└── README.md        # プロジェクト説明書
```

---

## ⚙️ データのカスタマイズ方法

### 1. 作品の詳細やリンクの変更 (`js/script.js`)
`js/script.js` の先頭にある `projectsData` オブジェクトから、モーダルに表示される詳細情報（タイトル、概要、特徴、使用技術、URLなど）を直接書き換えられます。

### 2. リンクカードやプロフィールの変更 (`index.html`)
`index.html` 内のテキストやURLを変更するだけで反映されます：
- プロフィール情報: `<section class="hero-section">`
- リンク集カード: `<section id="links">` 内の `<a class="link-card">`
- 制作物カード: `<section id="works">` 内の `<div class="work-card">`
- スキル一覧: `<section id="skills">`
- 理念・メッセージ: `<section id="about">`
- お問い合わせメール: `<section id="contact">`

---

## 🚀 使い方

ブラウザで `index.html` を直接ダブルクリックして開くか、お好みの静的Webサーバーでお使いいただけます。
```bash
# 例: macOS標準の簡易サーバー（必要な場合のみ）
python3 -m http.server 8000
```
