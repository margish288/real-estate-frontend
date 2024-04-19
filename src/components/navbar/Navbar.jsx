import { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";
import apiRequest from "../../lib/apiRequest";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Estate</span>
        </a>
        {/* TODO: add agent route  */}
        {/* <a href="/">Contact to Agents</a> */}
      </div>
      <div className="right index-top">
        {currentUser ? (
          <div className="user-container">
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
            <div className="user">
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
                {number > 0 && <div className="notification">{number}</div>}
                <span>Profile</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}

        {/* show side bar for login and signin only */}
        {!currentUser ? (
          <>
            <div className="menuIcon">
              <img
                src="/menu.png"
                alt=""
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            <div className={open ? "menu active" : "menu"}>
              {/* TODO: add agents route for mobile */}
              {/* <a href="/">Contact to Agents</a> */}
              <Link to="/login">Sign in</Link>
              <Link to="/register" className="register">
                Sign up
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="menuIcon">
              <img
                src="/menu.png"
                alt=""
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            <div className={open ? "menu active" : "menu"}>
              <Link to="/" onClick={handleLogout}>
                Log out
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
