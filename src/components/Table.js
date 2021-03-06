import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = (props) => {
  const { headers, rows } = props;
  return (
    <div>
      <table className="table table-bordered table-hover">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
      </table>
    </div>
  );
};
export default Table;
