import React from "react";
import Select from "./microComponents/Select";
import TimeZones from "../data/time-zones.json";
import Modal from "./microComponents/Modal";

function SettingsModal(props) {
  const regions = [
    { label: "EU", value: "EU" },
    { label: "US", value: "US" },
  ];
  const [vRegion, setVRegion] = React.useState(props.settings.region);
  const tzs = TimeZones;
  const [vTz, setTz] = React.useState(props.settings.tz);

  return (
    <Modal
      title={"Settings"}
      showModal={props.showModal}
      onOpen={props.onOpenModal}
      onClose={props.onCloseModal}
    >
      <Select
        label={"Region"}
        items={regions}
        value={vRegion}
        onChange={(e) => setVRegion(e.currentTarget.value)}
      />

      <Select
        label={"GMT"}
        items={tzs}
        value={vTz}
        onChange={(e) => setTz(e.currentTarget.value)}
      />
      <button
        onClick={(e) => {
          props.setSettings({
            region: vRegion,
            tz: vTz,
          });
          props.onCloseModal();
        }}
        className="btn btn-primary "
        type="button"
      >
        Confirm
      </button>
    </Modal>
  );
}
export default SettingsModal;
