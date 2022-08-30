import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "/configs/api";
import NavBar from "../NavBar/NavBar";

import "./SignUpForm.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await api.post("auth/signup", data);
    console.log(response.data);
    const preLogin = await api.post("auth/signin", {
      account: data.username,
      password: data.password,
    })
    navigate("/setgoal");
  };

  return (
    <div className="formsignup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>
        <label htmlFor="username">Username</label>
        {/* <br /> */}
        <input
          {...register("username", {
            required: true,
            minLength: 6,
            maxLength: 15,
          })}
          id="username"
          placeholder="Username"
        />
        {/* <br /> */}
        {errors.username && errors.username.type === "required" && (
          <span className="error-signup">Invalid or empty username.</span>
        )}
        {errors.username &&
          (errors.username.type === "minLength" ||
            errors.username.type === "maxLength") && (
            <span className="error-signup">
              Username should be between 6-15 characters.
            </span>
          )}
        <br />

        <label htmlFor="name">Name</label>
        {/* <br /> */}
        <input
          {...register("name", {
            required: true,
            minLength: 1,
            maxLength: 50,
          })}
          id="name"
          placeholder="Name"
        />
        {/* <br /> */}
        {errors.name && errors.name.type === "required" && (
          <span className="error-signup">What's your name?</span>
        )}
        {errors.name &&
          (errors.name.type === "minLength" ||
            errors.name.type === "maxLength") && (
            <span className="error-signup">
              Name should be between less than 50 characters.
            </span>
          )}
        <br />

        <label htmlFor="email">Email</label>
        {/* <br /> */}
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="email"
        />
        {/* <br /> */}
        {errors.email && errors.email.type === "required" && (
          <span className="error-signup">Please enter a valid email.</span>
        )}
        <br />

        <label htmlFor="password">Password</label>
        {/* <br /> */}
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
          id="password"
          type="password"
          placeholder="Password"
        />
        <br />
        {errors.password && errors.password.type === "required" && (
          <span className="error-signup">Password is required</span>
        )}
        {errors.password &&
          (errors.password.type === "minLength" ||
            errors.password.type === "maxLength") && (
            <span className="error-signup">
              Your password must be between 8-16 characters.
            </span>
          )}

        {/* <br /> */}
        <label htmlFor="date_of_birth">Date of Birth</label>
        {/* <br /> */}
        <input
          {...register("date_of_birth", { required: true })}
          id="date_of_birth"
          type="date"
          placeholder="Date of birth"
        />
        <br />

        <label htmlFor="height">Height</label>
        {/* <br /> */}
        <input
          {...register("height", { required: true })}
          id="height"
          type="number"
          placeholder="Height(cm)"
        />
        {/* <br /> */}
        {errors.height && errors.height.type === "required" && (
          <span className="error-signup">What's your height?</span>
        )}
        <br />

        <label htmlFor="weight">Weight</label>
        {/* <br /> */}
        <input
          {...register("weight", { required: true })}
          id="weight"
          type="number"
          placeholder="Weight(kg)"
        />
        {/* <br /> */}
        {errors.weight && errors.weight.type === "required" && (
          <span className="error-signup">What's your weight?</span>
        )}
        <button type="submit"> Continue</button>{" "}
        {/* className="submit-signup" */}
      </form>
    </div>
  );
};

export default SignUpForm;
