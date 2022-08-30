import SignInForm from '../../components/SignInForm/SignInForm'
import './SignIn.css'
import NavBar from "../../components/NavBar/NavBar";

const SignIn = () => {

    return (
        <div className='container-signin'>
            <section className="form-signin">
                <NavBar />
                <div className='container-sigin-form'>
                    <SignInForm />
                </div>
            </section>
            <section className="img-signin">
                <img src="./assets/bubble-gum-workflow.gif" alt="" />
            </section>
        </div>
    )
}

export default SignIn