import Navbar from "./componant/Navbar";
import Form from "./componant/Form";
import Table from "./componant/Table";
import Deleted from "./componant/task/Deleted";
import Completed from "./componant/task/Completed";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [open, setopen] = useState(0);

  return (
    <div>
      <h1>Task Tracker </h1>

      <Navbar setopen={setopen} />

      {open === 0 && (
        <>
          <Form data={data} setData={setData} />

          <Table
            setDeleted={setDeleted}
            deleted={deleted}
            setcompleted={setcompleted}
            completed={completed}
            data={data}
            handleClick={(no) => {
              setData(data.filter((a) => a.time !== no));
            }}
          />
        </>
      )}
      {open === 1 && <Completed completed={completed} />}
      {open === 2 && <Deleted deleted={deleted} />}
    </div>
  );
};

export default App;
