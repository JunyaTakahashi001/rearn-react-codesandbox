/**
 * [jsx]ファイルはリアクトのコンポーネント専用ファイル
 * コンポーネント名は先頭を大文字で記載する
 */

// reactでは必ず必要
import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      {/* インラインでstyleを当てる方法 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントに対し、props(渡したい情報)を渡す[color,massage] */}
      <ColorfulMessage color="blue" message="お元気ですか?" />
      <ColorfulMessage color="pink" message="元気です!" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルで関数を使用できるようエクスポート
export default App;
