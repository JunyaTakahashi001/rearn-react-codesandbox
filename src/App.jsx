/**
 * [jsx]ファイルはリアクトのコンポーネント専用ファイル
 * コンポーネント名は先頭を大文字で記載する
 */

// reactでは必ず必要
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    // 現在の状況の更新
    setNum(num + 1);
  };
  // stateを利用する {変数, 更新用関数名 } = useState(初期値);
  const [num, setNum] = useState(0);

  return (
    <>
      {/* インラインでstyleを当てる方法 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* ①コンポーネントに対し、props(渡したい情報)を渡す[color] */}
      {/* ②タグ内のテキストは[props.children]で受け取り側で受け取れる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/* state関数呼び出し */}
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
    </>
  );
};

// 他のファイルで関数を使用できるようエクスポート
export default App;
