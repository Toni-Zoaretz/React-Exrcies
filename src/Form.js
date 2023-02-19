import React from "react";

function Form(props) {
  return (
    <div>
      <label>{props.value}</label>
      <input type="checkbox" />
    </div>
  );
}

export default Form;
