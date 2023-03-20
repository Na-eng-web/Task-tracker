import React, { useState } from "react";
import Style from "../style/Loginform.module.css";
import { useForm } from "react-hook-form";

const Loginform = () => {
  const [user, setUser] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className={`d-flex align-items-center flex-column ${Style.div}`}>
      <form
        onSubmit={handleSubmit((data) => {
          if (data.Password === data.Rpassword) {
            return setUser(data);
          } else {
            alert("password mismatch");
            setUser();
            reset();
          }
        })}
      >
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="Fname">First Name</label>
            <input
              {...register("Fname", { required: true })}
              placeholder={
                errors.Fname?.type === "required" ? "write First Name" : ""
              }
              id="Fname"
              className={`${Style.input} form-control`}
            />
          </div>
          <div className="col">
            <label htmlFor="LName">Last Name</label>
            <input
              {...register("Lname", { required: true })}
              placeholder={
                errors.Lname?.type === "required" ? "write Last Name" : ""
              }
              id="LName"
              className={`${Style.input} form-control`}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="Password">Password</label>
            <input
              {...register("Password", { required: true })}
              id="Password"
              type="password"
              className={`${Style.input} form-control`}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="Rpassword">Repeat Password</label>
            <input
              {...register("Rpassword", { required: true })}
              id="Rpassword"
              type="password"
              className={`${Style.input} form-control`}
            />
          </div>
        </div>
        <button className={Style.btn}>Submit</button>
      </form>
      {user && (
        <div className="my-3">
          <h4>Hello {user.Fname + " " + user.Lname}</h4>
          <h5> your password is {user.Password} </h5>
        </div>
      )}
    </div>
  );
};

export default Loginform;
