import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input type={props.type} id={props.id} ref={props.reference} />
    </div>
  );
}

export default React.memo(Input);
