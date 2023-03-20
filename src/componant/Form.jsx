import React from "react";
import { useForm } from "react-hook-form";
import Style from "../style/Form.module.css";

const Form = (props) => {
  let day = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className={Style.main}>
      <form
        onSubmit={handleSubmit((data) => {
          return (
            props.setData([...props.data, { ...data, day, time }]), reset()
          );
        })}
      >
        <div className="d-flex mb-5 justify-content-evenly">
          <div className="d-flex flex-column">
            <div className="d-flex ">
              <input
                {...register("Time", { required: true })}
                type="number"
                className="form-control"
                placeholder="Add task time"
              />

              <select
                {...register("timevalue")}
                className="form-select"
                style={{ width: "fit-content" }}
              >
                <option value="Sec">Sec</option>
                <option value="Min">Min</option>
                <option value="Hr">Hr</option>
                <option value="Day">Day</option>
              </select>
            </div>

            {errors.Time?.type === "required" && (
              <span className="text-danger">*Write time</span>
            )}
          </div>

          <div className="d-flex align-items-center">
            <label htmlFor="priority" className="mx-3">
              Priority
            </label>
            <select
              {...register("Priority")}
              id="priority"
              className="form-select"
              style={{ width: "fit-content" }}
            >
              <option value="High">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div className="d-flex">
          <input
            {...register("Task", { required: true })}
            type="text"
            className="form-control"
            placeholder="Add new task"
          />
          <button className="btn btn-dark">Submit</button>
        </div>

        {errors.Task?.type === "required" && (
          <p className="text-danger">*Please add Task Name</p>
        )}
      </form>
    </div>
  );
};

export default Form;
