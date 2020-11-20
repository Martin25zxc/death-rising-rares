import React from "react";
function Select(props) {
  const items = props.items;
  return (
    <div className="input-group mb-3">
      {props.label && (
        <div className="input-group-prepend">
          <label className="input-group-text">{props.label}</label>
        </div>
      )}
      <select
        className="custom-select"
        value={props.value}
        onChange={props.onChange}
      >
        {items.map((item, i) => (
          <option key={`k ${i} - ${item.value.toString()}`} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
