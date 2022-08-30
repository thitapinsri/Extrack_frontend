import React, { useState, useEffect } from "react";
import BarChart from "../../components/BarChart/BarChart";
import ProfileSession from "../../components/ProfileSession/ProfileSession";
import NavBar from "../../components/NavBar/NavBar";
import CartList from "../../components/CartList/CardList";
import goalIcon from '/assets/icons8-trophy-100.png';
import trackIcon from '/assets/icons8-futures-100.png'
import recentIcon from '/assets/icons8-track-and-field-skin-type-1-100.png'
import api from "/configs/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const recentCards = cards.slice(0, 2);

  const [dailyStats, setDailyStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const BMI = (user.weight / (user.height / 100) ** 2).toFixed(2);

  const getDailyStats = async () => {
    setLoading(true);
    const response = await api.get("user/activities/daily-stats");
    // console.log(response.data);
    setDailyStats(response.data);
    setLoading(false);
  };

  const getUserInfo = async () => {
    const response = await api.get("user/me");
    setUser(response.data);
    console.log(user)
  };

  const getData = async () => {
    const response = await api.get("user/activities");
    setCards(response.data);
  };


  // count goal avachieved day
  let goalAchieved = 0;
  const getGoalAchieved = () => {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + (7 * 60 * 60 * 1000));
    const achievedDays = dailyStats.filter((day) => {
      if (Date.parse(day._id) >= Date.parse(sevenDaysAgo)) {
        return day;
      }
    });
    goalAchieved = achievedDays.length;
    // console.log(achievedDays.length);
  };
  getGoalAchieved();


  // get Gretting
  const [greeting, setGreeting] = useState('Dashboard')

  const getGetting = (user) => {
    // if (user.name) {
      let greet;
      let myDate = new Date();
      let hrs = myDate.getHours();

      if (hrs < 12)
        greet = 'Good Morning';
      else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
      else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

      setGreeting(`${greet},  ${user.name}!`)
    // }
  }

  useEffect(() => {
    getUserInfo()
    getDailyStats();
    getData();
    if (user.name) {
      getGetting(user);
    }
  }, []);

  const profileUpSize = {
    height: "40px",
    padding: "5px",
  };
  return (
    <div className="dash-board">
      <div className="container-dash">
        {
          user &&
          <ProfileSession user={user} />
        }
        <section className="subconleft-dash">
          <div className="upleftsub">
            <div className="upleftsub-head">

              <h1>{greeting}</h1>
            </div>
            <div className="upleftsub-board">
              <div className="goal-dash">
                <div className="headgoal-dash">
                  <img src={goalIcon} alt="" />
                  <h3>Goal</h3>
                </div>
                <div className="inspiration-goal-dash">
                  <p className="inspiration">Inspiration:</p>
                  <p className="inspiration-content-input">
                    {user.inspiration || "-"}
                  </p>
                  <div className="goal-content">
                    <h1 className="goal-content-input1">
                      {goalAchieved || "0"}
                    </h1>
                    <h2> out of </h2>
                    <h2 className="goal-content-input2">
                      {user.weekly_goal || "7"}
                    </h2>
                    <h2>days</h2>
                  </div>
                </div>
                <div className="bmi-goal-dash">
                  <h4>BMI</h4>
                  <h1>{BMI || "-"}</h1>
                </div>
              </div>
              <div className="graph-dash">
                <div className="headtracking">
                  <img src={trackIcon} alt="" />
                  <p>Track History</p>
                </div>
                <div className="bar-chart-tracking">
                  <BarChart dailyStats={dailyStats} loading={loading} />
                </div>
              </div>
            </div>
          </div>
          <div className="downleftsub-board">
            <div className="head-recentact">
              <img
                src={recentIcon}
                alt=""
              />
              <p>Recent Activities</p>
            </div>
            <div className="recent-content">
              <CartList cards={recentCards} />
            </div>
          </div>
        </section>



        {/*<session className="subconright-dash">
        <div className="upright-dash">
          {/* only set backgroung color 
          <img src="#" alt="" />
        </div>
        <div className="downright-dash">
          <div className="content1">
            <div className="nameprofile">
              <h2>John Doe</h2>
              <p>@username</p>
              </div>
            <p>รับค่า inspiration มา</p>
          </div>
          <div className="content2">
            <div className="height">
              <p>Height</p>
              <h2>166</h2>
            </div>
            <div className="weight">
            <p>Weight</p>
              <h2>99</h2>
            </div>
          </div>
          <div className="content3">
            <p>Bio</p>
            <div className="perdata">
              <p>Name: John Doe</p>
              <p>Birth Date: 1/1/1111</p>
              <p>Age: 22</p>
              </div>
              {/* <button /> ปุ่มบวก 
              </div>
              </div>
            </session>*/}
      </div>
    </div>
  );
};

export default Dashboard;
