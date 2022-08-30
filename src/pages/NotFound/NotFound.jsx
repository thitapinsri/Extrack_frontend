import { Link, useLocation } from "react-router-dom";

const NotFound = () => {

  return (
    <div className="notfound">
      <img src="./assets/jaconda-17.gif" alt="" />
      <Link to="/user/dashboard">Back to Dashboard</Link>
    </div>
  )
}

export default NotFound