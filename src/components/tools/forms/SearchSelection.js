import React from "react";
import { Dropdown } from "semantic-ui-react";

const SearchSelection = ({ name, placeHolder, error, label, onSelect, data , value}) => {
    const isError = <div className="ui orange message">{error[name]}</div>
  return (
    <div className="field">
      <label>{label}</label>
      <Dropdown
        fluid
        search
        selection
        options={data}
        onChange={onSelect}
        placeholder={placeHolder}
        value={value}
      />
      {
          error[name] ? isError : null
      }
    </div>
  );
};

export default SearchSelection;
