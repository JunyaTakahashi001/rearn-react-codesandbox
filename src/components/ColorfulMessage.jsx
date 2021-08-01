import React from "react";

// 引数propsで受け取り（オブジェクト形式）
// エクスポート方法②[export]を関数の先頭に付与
export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, // オブジェクトのkeyとvalueが同じ場合省略できる
    fontSize: "18px"
  };

  // [props.children]でタグの中身を受け取る
  return <p style={contentStyle}>{children}</p>;
};

// エクスポート方法①
// export default ColorfulMessage;
