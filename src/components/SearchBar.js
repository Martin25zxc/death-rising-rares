import React from "react";
import SettingsModal from "./SettingsModal";
function SearchBar(props) {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Name..."
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
        {/* <div className="input-group-append">
          <button
            className="btn btn-dark"
            type="button"
            onClick={props.onOpenModal}
          >
            <i className="fa fa-cog" aria-hidden="true"></i>
          </button>
        </div> */}
      </div>
      {/* <SettingsModal
        showModal={props.showModal}
        onOpenModal={props.onOpenModal}
        onCloseModal={props.onCloseModal}
      /> */}
    </React.Fragment>
  );
}
export default SearchBar;
