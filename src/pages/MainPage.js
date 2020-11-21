import React, { useState } from "react";
import db from "../data/rares.json";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import SettingsButton from "../components/SettingsButton";
import RarareICMapping from "../components/RareICMapping";

function useSearchRares(rares) {
  // Search variables
  const [query, setQuery] = useState("");
  const [filteredRares, setFilteredRares] = useState(rares);

  React.useMemo(() => {
    const result = !query
      ? rares
      : rares.filter((rare) => {
          return rare.name.toLowerCase().includes(query.toLowerCase());
        });

    setFilteredRares(result);
  }, [rares, query]);
  return { query, setQuery, filteredRares };
}
function MainPage() {
  // const [error, setError] = useState(null);
  // const [intervalId, setIntervalID] = useState();

  //Settings
  //Default settings
  const defaultSettings = {
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    region: [-1, 0, 1, 2, 3, 4, 5].includes(-new Date().getTimezoneOffset() / 3)
      ? "EU"
      : "US",
  };
  const [settings, setsettings] = React.useState(defaultSettings);
  //Search and result search variables
  const { query, setQuery, filteredRares } = useSearchRares(db);
  //Modal variables
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const data = RarareICMapping(filteredRares, settings);

  return (
    <React.Fragment>
      <div className="container p-2">
        <div className="input-group mb-3">
          <SearchBar
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <div className="input-group-append">
            <SettingsButton
              settings={settings}
              setSettings={setsettings}
              showModal={showModal}
              onCloseModal={handleClose}
              onOpenModal={handleShow}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            {data.length > 0 && (
              <Table headers={["Rare", "Next spawn", ""]} rows={data} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainPage;
