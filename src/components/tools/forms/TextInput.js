import React, { useEffect } from "react";
const TextInput = ({ name, label, error, onChange, placeHolder }) => {
  useEffect(() => {
    console.log("text input render oldu");
  });
  let cssStyle = error[name] ? 'field error' : 'field';
  const isError = <div className="ui orange message">{error[name]}</div>
  return (
    <div className={cssStyle}>
      <label>{label}</label>
      <input
        placeholder={placeHolder}
        onChange={onChange}
        name={name}
      ></input>
      {
          error[name] ? isError:null
      }
    </div>
  );
};

export default TextInput;
