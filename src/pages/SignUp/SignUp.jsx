import SignUpForm from "../../components/SIgnUpForm/SignUpForm";
import "./SignUp.css";
import NavBar from "../../components/NavBar/NavBar";

const SignIn = () => {
  return (
    <div className="container-signup">
      <section className="form-signup">
        <NavBar />
        <div className="div-form-signup">
            <SignUpForm />
        </div>
      </section>
      <section className="img-signup">
        <div className="pic1">
          <img src="./assets/sammy-no-connection.gif" alt="" />
        </div>
      </section>
    </div>
  );
};

export default SignIn;
