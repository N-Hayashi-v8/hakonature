# WORKLOG

## 2026-07-24

- JOURNALセクション実装
  - 構成: 見出し（JOURNAL / ジャーナル / リード文）、ジャーナル3件、「ジャーナルをもっと見る」リンク
  - レイアウト: 左サムネイル495px（`img/top/journal1〜3.png`）＋ 右本文（タイトル・本文・所要時間・Route・タグ・View More）
  - ユーザー指示を確定反映: セクション上下余白17rem、コンテンツ幅1100px、コンテンツ間の縦余白40px、枠線はタイトルのみ・色`#000`
  - 時計（所要時間）アイコンは素材が無いため`&__duration-icon`の擬似要素でCSS代用
  - カラーは新規追加せず流用（緑`$color-button`、区切り線・タグ枠`$color-border-tag`、ルートタグ背景`$color-background-hover`）
  - `scss/object/project/_journal.scss`を新規作成、`scss/style.scss`に`@use`追加、`index.html`にマークアップ追加
  - （要確認）各フォントサイズ・余白、ルートタグ背景色の正確な値、View More/もっと見るアイコンサイズは仮値のまま

- JOURNAL細部調整（Figma個別指定を反映）
  - View Moreを共通コンポーネント `c-more`（`scss/object/component/_more.scss`）へ切り出し、journal・tourで共通利用。`p-journal__more`は位置指定（右下）のみに縮小
  - View Moreボタンを箱型に確定: 120×40・枠は右/下のみ `#000`・緑丸矢印
  - Route行を上下1pxボーダーのバンド化（色 `#CBC4BB` = `$color-border-tag`、高さ50px相当をpaddingで確保）
  - ハッシュタグを角丸4px（全円→4px）・枠 `#CBC4BB` のチップに変更

- マーキー（文字スライド）セクション実装
  - `p-marquee`（`scss/object/project/_marquee.scss`）新規。文字サイズ10rem、英文2コピーをtrack `-50%` 移動で継ぎ目なく無限ループ
  - 帯の上下に `#000` 1pxボーダー、`overflow: hidden` でクリップ、`prefers-reduced-motion` でアニメ停止
  - （要確認）速度 `animation-duration: 60s` は仮値

- TOUR/EVENTセクション実装
  - `p-tour`（`scss/object/project/_tour.scss`）新規。見出し（TOUR/EVENT）＋2×2グリッドのカード4件（`tour1〜4.png`）
  - 各カードは左サムネ＋右本文（タイトル・説明・View More=`c-more` 流用）。DOM順で左右・上下に配置
  - 上部の全幅写真 `experience.png`（1920×650）は未実装。マーキーと対の experienceセクションとして別途対応予定
  - （要確認）カード枠線構成・内側余白・サムネ幅・フォントサイズ、英語カードのフォント

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
