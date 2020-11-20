import React from "react";
function handleClickToCopy(e) {
  navigator.clipboard.writeText(e.target.getAttribute("scommand"));
}
const TableBody = (props) => {
  const { headers, rows } = props;
  const columns = headers ? headers.length : 0;
  const showSpinner = rows === null;
  function buildRow(row, i) {
    const id = row.id;
    return (
      <tr id={`tr-${row.id}`} key={`tr-${row.id}`}>
        {/* <td className="table-light " key={`td-f-${id}`}>
          <i
            className="fa fa-star-o fa-2x d-flex justify-content-lg-center"
            aria-hidden="true"
          ></i>
        
        </td> */}
        <td className="table-light" key={`td-n-${id}`}>
          <a
            rel="noopener noreferrer"
            href={`https://www.wowhead.com/npc=${id}/`}
            target="_blank"
          >
            {row.name}
          </a>
        </td>
        <td className="table-light" key={`td-nsp-${id}`}>
          {row.nextSpawn}
        </td>
        <td className="table-light" key={`td-a-${id}`}>
          <button
            onClick={handleClickToCopy}
            type="button"
            className="btn btn-dark mr-3"
            scommand={`/way ${row.x} ${row.y}`}
            title="tomtom"
          >
            <i className="fa fa-arrows" aria-hidden="true"></i>
          </button>
          <button
            onClick={handleClickToCopy}
            type="button"
            className="btn btn-dark mr-3"
            scommand={`/run C_Map.SetUserWaypoint(UiMapPoint.CreateFromCoordinates(118, ${row.x}/100, ${row.y}/100))`}
            title="Map Pin"
          >
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tbody>
      {showSpinner && (
        <tr key="spinner-0">
          <td key="tdspinner-0" colSpan={columns} className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      )}
      {!showSpinner &&
        rows &&
        rows.map((value, i) => {
          return buildRow(value, headers, i);
        })}
    </tbody>
  );
};

export default TableBody;
