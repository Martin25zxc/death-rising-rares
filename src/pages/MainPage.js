import React from "react";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import db from "../data/rares.json";
import RarareICMapping from "../components/RareICMapping";
const DEFAULT_REGION = "US";
const DEFAULT_GMT = -3;
function useSearchRares(rares) {
  // Search variables
  const [query, setQuery] = React.useState("");
  const [filteredRares, setFilteredRares] = React.useState(rares);
  // Variables for calculate spawn
  // const [gmt, setgmt] = React.useState(spawnConfig.gmt);
  // const [region, setRegion] = React.useState("US");

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
function useChangeSpawnSetting() {}
function MainPage() {
  //Search and result search variables
  const { query, setQuery, filteredRares } = useSearchRares(db);
  //Modal variables
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  var data = RarareICMapping(filteredRares, {});

  return (
    <React.Fragment>
      <div className="container p-2">
        <SearchBar
          showModal={showModal}
          onCloseModal={handleClose}
          onOpenModal={handleShow}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <div className="row">
          <div className="col">
            {data.length > 0 && (
              <Table headers={Object.keys(data[0])} rows={data} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainPage;
