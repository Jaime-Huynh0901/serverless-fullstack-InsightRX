import React, { useState } from "react";

const useDropdown = (
  label,
  defaultState,
  options,
  handleTypeSelectChange,
  idx
) => {
  const [state, setState] = useState(defaultState);
  const Dropdownmaker = () => (
    <label htmlFor={label}>
      {label}
      <select
        className="typeOfProp"
        data-idx={idx}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          handleTypeSelectChange(e, idx, e.target.value);
        }}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>Choose Prop Types</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdownmaker, setState];
};

export default useDropdown;
