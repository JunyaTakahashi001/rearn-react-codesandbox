/**
 * [jsx]ファイルはリアクトのコンポーネント専用ファイル
 * コンポーネント名は先頭を大文字で記載する
 */

// reactでは必ず必要
import React from "react";

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// 他のファイルで関数を使用できるようエクスポート
export default App;
