# WORKLOG

## 2026-07-21

- PICKUP NEWSセクション実装
  - ラベル行（「PICKUP NEWS」+ 矢印アイコン）、ニュース3件、View Moreの4カラム構成
  - アイコン画像素材が無いため、ラベル横のシェブロンは `»` を回転、View Moreの矢印は既存MVの矢印パターンを流用
  - カラーは新規追加せず、緑は `$color-button`、区切り線は `$color-border-tag` を流用
  - ユーザー指示によりMVとの余白10rem・ラベル行高さ4.4rem・コンテンツ行高さ16rem・コンテンツ内側余白4rem均等を確定反映（`scss/object/project/_pickup-news.scss`）
  - （要確認）ラベル行の左右余白・文字間、View More列幅、日付文字色、本文フォントサイズは仮値のまま

## 2026-07-10

- Figma共通項目（参照URL・フォント・カラー）を確認し反映
  - 参照サイト: <https://hakonature.jp/>
  - フォント: Arimo（英数字）/ Zen Kaku Gothic New（日本語）
  - `scss/foundation/_variable.scss` にカラー・フォント変数を追加
  - `scss/foundation/_base.scss` を新変数で更新（body背景色・文字色・フォント指定）
  - `index.html` を新規作成（Google Fontsの読み込み、destyle.css/style.cssの読み込みのみの状態、セクション実装は未着手）
- ヘッダー実装
  - ロゴは `img/logo.png`（161×40px）を採用。`img/top/logo.png` と同一画像のため共通素材として運用
  - ナビ項目: JOURNAL / TOUR EVENT / SPOT / ABOUT / INFORMATION / MEMBERS / NEWS（要確認: ABOUTは画像不鮮明のため推測）
  - JP/ENトグル: 80×30px・角丸4px・枠線 `#000000`。クリックで `is-active` を切替（表示のみ、実際の言語切替はなし）
  - OSのハイコントラスト/強制カラーモードでEN側が緑色に見える問題は `forced-color-adjust: none` で解消
  - ロゴとナビ+トグルを左右に分離、ヘッダーは全幅（`max-width` 制約なし）に変更
  - `scss/layout/_header.scss` を新規作成
- MVセクション実装
  - メイン画像は `img/top/mv.png`（1728×864, 比率2:1）、右下バナー画像は `img/top/coinlocker.png`（156×117）と特定して採用
  - 右下バナーは画像右端から32px・下端から75pxはみ出す配置（`.p-mv__image-inner` を基準に `position: absolute` で実装、Figmaの絶対座標はそのまま使わず相対値に変換）
  - 「プロジェクトについて」ボタンは 192×42px、`border-right` / `border-bottom` 1pxで実装
  - ヘッダーとの間の余白はなしに変更（`padding-top` を削除）
  - `scss/object/project/_mv.scss` を新規作成
  - （要確認）見出し・本文・バナーテキストのフォントサイズ/行間/余白、ボタン枠線の色は仮値のまま数値未確定

## 2026-07-09

- プロジェクト初期構成を作成（scss/img/js/docs、FLOCSS用ディレクトリ）

---

## 記法ルール

- 日付見出し（`## YYYY-MM-DD`）を新しい日付ほど上に追記する
- 各日付の下に箇条書きで作業内容を記録する
- 未解決事項があれば箇条書き末尾に `（要確認）` を付ける
