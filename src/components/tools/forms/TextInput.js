import React from "react";
const TextInput = ({ name, label, error, onChange, placeHolder, value }) => {
  let cssStyle = error[name] ? 'field error' : 'field';
  const isError = <div className="ui orange message">{error[name]}</div>
  return (
    <div className={cssStyle}>
      <label>{label}</label>
      <input
        placeholder={placeHolder}
        onChange={onChange}
        name={name}
        value={value}
      ></input>
      {
          error[name] ? isError:null
      }
    </div>
  );
};

export default TextInput;
