import React, { useRef, useEffect } from "react";
import "turn.js";
import $ from "jquery";

export default function Turn(props) {
  let fadeClass = useRef("");

  useEffect(() => {
    if (fadeClass) {
      console.log($(fadeClass).turn);
      $(fadeClass).turn(Object.assign({}, props.options));
    }
    // 	//   document.addEventListener("keydown", handleKeyDown, false);
  }, [props.options]);

  return (
    <div
      className={props.className}
      style={Object.assign({}, props.style)}
      ref={(el) => {
        fadeClass = el;
      }}
    >
      {props.children}
    </div>
  );
}
