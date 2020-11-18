import React from "react";

import Modal from "./Modal";

function SettingsModal(props) {
  return (
    <Modal
      title={"Settings"}
      showModal={props.showModal}
      onOpen={props.onOpenModal}
      onClose={props.onCloseModal}
    >
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text">Region</label>
        </div>
        <select className="custom-select">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text">GMT</label>
        </div>
        <select className="custom-select">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </Modal>
  );
}
export default SettingsModal;
