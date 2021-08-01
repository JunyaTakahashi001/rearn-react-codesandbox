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
      {/* ①コンポーネントに対し、props(渡したい情報)を渡す[color] */}
      {/* ②タグ内のテキストは[props.children]で受け取り側で受け取れる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルで関数を使用できるようエクスポート
export default App;
