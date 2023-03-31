import React from "react";

const Completed = (props) => {
  return (
    <div>
      <h1>Completed</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Day</th>
            <th>Time</th>
            <th>Task</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {props.completed.map((dat, index) => {
            return (
              <tr key={index} id={index}>
                <td>{index + 1}</td>
                <td>{dat.day}</td>
                <td>{dat.time}</td>
                <td>{dat.Task}</td>
                <td>{dat.Priority}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Completed;
