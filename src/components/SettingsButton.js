import React from "react";
import SettingsModal from "./SettingsModal";
function SettingsButton(props) {
  return (
    <React.Fragment>
      <button
        aria-label="Settings"
        className="btn btn-dark"
        type="button"
        onClick={props.onOpenModal}
      >
        <i className="fa fa-cog" aria-hidden="true"></i>
      </button>

      <SettingsModal
        settings={props.settings}
        setSettings={props.setSettings}
        showModal={props.showModal}
        onOpenModal={props.onOpenModal}
        onCloseModal={props.onCloseModal}
      />
    </React.Fragment>
  );
}
export default SettingsButton;
