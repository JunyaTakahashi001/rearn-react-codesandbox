/**
 * [jsx]ファイルはリアクトのコンポーネント専用ファイル
 * コンポーネント名は先頭を大文字で記載する
 */

// reactでは必ず必要
import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  // オブジェクトでstyleを当てる方法
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      {/* インラインでstyleを当てる方法 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルで関数を使用できるようエクスポート
export default App;
