import "./App.css";
import Table from "./components/Table";
import data from "./Data.json";

function App() {
  const columns = [
    { label: "Name", accessor: "full_name", sortable: true },
    { label: "Email", accessor: "email", sortable: true },

    { label: "Age", accessor: "age", sortable: true },
    { label: "Birth Date", accessor: "birth_date", sortable: true },
  ];
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h3 className="py-5">
        Sortable Table{" "}
        <span className="text-uppercase fw-bold">
          without using any library
        </span>{" "}
      </h3>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
