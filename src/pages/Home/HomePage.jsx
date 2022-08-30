import React from "react";
import './HomePage.css'
import ButtonHomePage from '../../components/ButtonHomePage/ButtonHomePage'
import NavBar from "../../components/NavBar/NavBar";

function homePage() {
  return (
    <>
      <NavBar />
      <div className="container-homepage">
        <section className="subcon1">
          <div className="subcon1-content">
            <h1>Asking yourself when to start exercise?</h1>
            <p>Make your life better with our help!</p>
            <ButtonHomePage />
          </div>
          <img src="./assets/home-page1.gif" alt="" />
        </section>

        <section className="subcon2">
          <div className="left-subcon2">
            <img src="./assets/home-page2.gif" alt="" />
            <div className="subcon2-content">
              <h1>Easy to access</h1>
              <p>
                Entry fast and easy, taking less of your valuable time. You can
                use our application from anywhere.
              </p>
            </div>
          </div>
          <div className="mid-subcon2">
            <img src="./assets/taxi-baseball-player.gif" alt="" />
            <div className="subcon2-content">
              <h1>Keeping yourself motivated</h1>
              <p>
                You can set your goal and inspirations to motivate yourself and design your future exercise easily!! Create a diary-like exercise. Help you enjoy exercising more and more.
              </p>
            </div>
          </div>
          <div className="right-subcon2">
            <img src="/assets/transistor-man-on-bicycle.gif" alt="" />
            <div className="subcon2-content">
              <h1>Crate your own lifestyle</h1>
              <p>
                Feel free to create your own workout lifestyle. Make exercise exciting!!!, have a plan, and please look forward to new features from us. to add more effective fitness tracking than ever before.
              </p>
            </div>
          </div>
        </section>

        <section className="subcon3">
          <div className="body-subcon3">
            <img src="./assets/home-page3.gif" alt="" />
            <div className="content-subcon3">
              <h1>
                The pain you feel today will be the strength you feel tomorrow 
              </h1>
              <p><i>– Arnold Schwarzenegger –</i></p>
            </div>
          </div>
          <div className="bottom-subcon3">
            <p>"Extrack" – Excercise Tracking</p>
            <ButtonHomePage className="buttonHome2" />
          </div>
        </section>
      </div>
    </>
  );
}

export default homePage;
