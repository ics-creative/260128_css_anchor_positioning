# CSS Anchor Positioning サンプル集

CSS Anchor Positioning APIを使用したタブUIのサンプル集です。

## 概要

このリポジトリには、CSS Anchor Positioning APIを活用した4つのタブUIサンプルが含まれています。各サンプルでは、アンカー要素に基づいて要素を配置する機能を活用し、JavaScriptを最小限に抑えた実装を実現しています。

## サンプル一覧

### 1. [シンプルなタブUI](./anchor_pos_simple.html)

基本的なアンカーポジショニングを使用したシンプルなタブUIのサンプルです。

- アンカー要素（タブ）に基づいて背景要素（座布団）を配置
- シンプルなトランジションアニメーション
- 最小限のJavaScript実装

### 2. [カスタムイージング付きタブUI](./anchor_pos_example.html)

カスタムイージング関数を使用した、より完成度の高いタブUIのサンプルです。

- カスタムイージング関数（`linear()`）を使用したスムーズなアニメーション
- レスポンシブデザイン対応
- ホバー・アクティブ状態のスタイリング

### 3. [スクロール駆動アニメーション付きタブUI](./anchor_with_scroll_driven.html)

スクロール駆動アニメーション（Scroll-driven Animations）とアンカーポジショニングを組み合わせたタブUIのサンプルです。

- スクロール位置に応じてタブの背景が自動的に移動
- `animation-timeline: scroll()`を使用したスクロール連動アニメーション
- Vue.jsを使用したコンポーネント実装
- スワイプ可能なタブコンテンツ

### 4. [:target-current を使ったタブUI](./anchor_with_target_current.html)

`:target-current`疑似クラスとアンカーポジショニングを組み合わせたタブUIのサンプルです。

- `:target-current`疑似クラスで現在表示中のパネルに対応するタブを検出
- `scroll-target-group: auto`を使用してスクロールマーカーグループを設定
- スクロール位置に応じてタブの背景（座布団）が自動的に移動
- Vue.jsを使用したコンポーネント実装
- スワイプ可能なタブコンテンツ

## 技術スタック

- HTML5
- CSS（Anchor Positioning API、Scroll-driven Animations、`:target-current`、`scroll-target-group`）
- JavaScript
- Vue.js 3（`anchor_with_scroll_driven.html`、`anchor_with_target_current.html`）


## 使い方

1. リポジトリをクローンまたはダウンロード
2. `index.html`をブラウザで開く
3. 各サンプルへのリンクから詳細を確認

または、各HTMLファイルを直接ブラウザで開いて確認することもできます。

## 参考記事

- [階層メニューやトーストUIが簡単に作れる新技術！　JavaScriptで利用するポップオーバーAPI](https://ics.media/entry/230530/)
- [ツールチップの実装に役立つ！ HTMLの新属性popover="hint"の使い方](https://ics.media/entry/250417/)
- [CSSアンカーポジショニング入門〜anchor\(\)・anchor\-size\(\)の使い方〜](https://ics.media/entry/251215/)
- [CSSだけでスクロールアニメーションが作れる！？ 新技術Scroll\-driven Animationsとは](https://ics.media/entry/230718/)
