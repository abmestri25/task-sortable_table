import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../useSortableTable";

const Table = ({ data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);
  return (
    <table class="table">
      <TableHead {...{ columns, handleSorting }} />
      <TableBody {...{ columns, tableData }} />
    </table>
  );
};

export default Table;
