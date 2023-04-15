import Navbar from "./componant/Navbar";
import Form from "./componant/Form";
import Table from "./componant/Table";
import Deleted from "./componant/task/Deleted";
import Completed from "./componant/task/Completed";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [open, setopen] = useState(0);

  return (
    <div>
      <h1>Task Tracker </h1>
      <Navbar />
      <Routes>
        <Route
          path="/Navbar"
          element={
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
          }
        />
        <Route path="/DoneTask" element={<Completed completed={completed} />} />
        <Route path="/DeletedTask" element={<Deleted deleted={deleted} />} />
      </Routes>
    </div>
  );
};

export default App;
