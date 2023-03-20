import React from "react";
import Timer from "./Timer";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sr.No.</th>
          <th>Day</th>
          <th>Time</th>
          <th>Task</th>
          <th>Priority</th>
          <th>Time Limit</th>
          <th>Status</th>
          <th>edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((dat, index) => {
          return (
            <tr key={index} id={index}>
              <td>{index + 1}</td>
              <td>{dat.day}</td>
              <td>{dat.time}</td>
              <td>{dat.Task}</td>
              <td>{dat.Priority}</td>
              <td>
                {dat.Time}
                {" " + dat.timevalue}
                <Timer time={dat.Time} />
              </td>
              <td>status</td>
              <td>edit</td>
              <td>
                <button
                  onClick={() => props.handleClick(dat.time)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
