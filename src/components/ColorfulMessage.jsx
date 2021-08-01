import React from "react";

// 引数propsで受け取り（オブジェクト形式）
const ColorfulMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfulMessage;
