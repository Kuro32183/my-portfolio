# My Portofolio!　:guitar:

## デモ

<!-- ![demo](https://media.giphy.com/media/vRN7Fy0ZWNPmlHMUoc/giphy.gif) -->

## 概要　:speech_balloon:

自身のポートフォリオとして制作しました。
フロントは Next.js（Typescript）＋ ChakraUiI で Vercel へデプロイしました。
主な機能は

- SG (ISR)で静的生成
- Atomic Design (Storybook)
- MicroCMS で制作品やブログ記事を管理
- パララックスアニメーション
- Three.js による 3D イメージ実装
- Stripe による決済（投げ銭）機能

## 環境　:ocean:

- Node.js: 16.14.0
- Next.js: 12.2.3
- React: 18.2.0

## ディレクトリ構成　:books:

```
├── .env <-- 環境変数
├── .env.production <-- 本番用環境変数
├── .eslintrc.json <-- ESLint設定ファイル
├── .prettierrc
├── compose.yml
├── Dockerfile
├── next-sitemap.js
├── README.md
├── jest.config.js <-- Jestの設定ファイル
├── jest.setup.js <-- テストファイルが実行される前に走る
├── next-env.d.ts
├── next.config.js <-- Next.js設定ファイル
├── yarn.lock
├── package.json
├── public
├── src
│   ├── components <-- Presentational Components
│   ├── hooks
│   ├── contexts <-- React Context
│   ├── pages <-- Next.jsのページ
│   ├── libs <-- API Client
│   ├── themes <-- styled-componentsのテーマ
│   ├── types <-- 型定義
│   └── utils <-- 汎用関数
└── tsconfig.json
```

## インストール　:feet:

```bash
npm install
```

## 使用方法　:paperclip:

```bash
git clone https://github.com/Kuro32183/my-portfolio.git
cd examples

```

## 開発サーバー起動 :computer:

開発サーバーの起動し、http://localhost:3000/ にアクセス

```
npm run dev
```

## Storybook 起動　:book:

Storybook を起動し、http://localhost:6006/ にアクセス

```
npm run storybook
```

## テスト実行　:eyes:

ユニットテスト実行

```
npm run test
```

## ソースコードリンター・フォーマッター　:shower:

ソースコードをリンターでチェック

```
npm run lint
```

ソースコードをフォーマッターで整形

```
npm run format
```

## Author 　:sunglasses:

- Kuro32183
- takumi32183@gmail.com

## License 　:email:

"My Portofolio!" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

"My Portofolio!" is Confidential.
