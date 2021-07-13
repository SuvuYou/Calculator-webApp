import React from "react";

export default function GridBtn(props) {
  return (
    <div onClick={props.onClick} className={props.class} name={props.name}>
      <h1>{props.placeHolder}</h1>
    </div>
  );
}
