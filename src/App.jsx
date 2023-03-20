import Navbar from "./componant/Navbar";
import Form from "./componant/Form";
import Table from "./componant/Table";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <h1>Task Tracker </h1>
      <Navbar time={20} />
      <Form data={data} setData={setData} />
      <Table
        data={data}
        handleClick={(no) => {
          setData(data.filter((a) => a.time !== no));
        }}
      />
    </div>
  );
};

export default App;
