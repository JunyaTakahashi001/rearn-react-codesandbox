/**
 * [jsx]ファイルはリアクトのコンポーネント専用ファイル
 * コンポーネント名は先頭を大文字で記載する
 * [state]を利用すると初期値(状態)に変化があった場合、関数コンポーネント(App関数)の再実行と再レンダリングが行われる
 * ↑[props]に変更があった場合も再読み込み
 * ↑親のコンポーネントが再レンダリングされた場合も再読み込み
 */

// reactでは必ず必要
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // stateを利用する {変数, 更新用関数名 } = useState(初期値);
  const [num, setNum] = useState(0);
  // 表示の切り替えでstateを利用
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // カウントを[state]で更新
  const onClickCountUp = () => {
    // 現在の状況の更新
    setNum(num + 1);
  };

  // 表示の切り替え変数[state]の持っている状態(ブーリアン)を[!]で反転
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // numが3の倍数の時だけtrueをセット
  if (num > 0) {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }

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
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {/* [faceShowFlag]がtrueの場合、右辺を返す(表示される) */}
      {faceShowFlag && <p>( *´艸｀)</p>}
    </>
  );
};

// 他のファイルで関数を使用できるようエクスポート
export default App;
