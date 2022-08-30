import "./SignInForm.css";
import { appendErrors, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "/configs/api";

const SignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const login = (account, password) => {
    api
      .post("auth/signin", {
        // username: account,
        // email: account,
        account: account,
        password: password,
      })
      .then(() => {
        console.log("login success");
        window.alert("login success, welcome!");
        navigate("../user/dashboard");
      })
      .catch(() => {
        console.log("Login failed");
        window.alert("Login failed. please try again");
      });
  };

  const onSubmit = (data) => {
    login(data.account, data.password);
  };

  return (
    <div className="signin">
        {/* <div className="formsign"> */}
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="account">Username/Email</label>
            {/* <br /> */}
            <input
              type="text"
              placeholder="Username/Email"
              {...register("account", { required: true })}
            />
            {errors.account && (
              <p className="error">Please Enter the Username or Email</p>
            )}
            <br />
            <label htmlFor="password">Password</label>
            {/* <br /> */}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="error">Please Enter the password</p>
            )}
            <br />
            <button>Sign In</button>
          </form>
        {/* </div> */}
    </div>
  );
};

export default SignInForm;
