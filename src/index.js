// reactで必要
import React from "react";
import ReactDom from "react-dom";

// コンポーネント[App.js]を読み込み
import App from "./App";

// HTMLのタグid=rootに差し込み
ReactDom.render(<App />, document.getElementById("root"));
