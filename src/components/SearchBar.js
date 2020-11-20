import React from "react";

function SearchBar(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Name..."
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
}
export default SearchBar;
