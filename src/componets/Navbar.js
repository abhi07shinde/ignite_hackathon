import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import bayer_logo from "../images/Bayer_Cross_1_white.svg";

function Navbar(props) {
    const [userName, setUserName] = useState('Abhishek Shinde')
  // const length = (props.userName.length)
//   const clearLocalStorage = () => {
//     localStorage.clear();
//     window.location.reload();
//     console.log("Local storage cleared");
//   };

  const [profileShow, setProfileShow] = useState(false);

  // handle profile drop down Show
  const handleProfileShow = () => {
    console.log("clicked");
    setProfileShow(!profileShow);
  };

  return (
    <div className="navbar">
      {/* Bayer Logo */}
      <div className="logo-container">
        <img className="logo" src={bayer_logo} alt="Bayer Logo"></img>
      </div>
      <h1 className="heading-ignite">Ignite Hackthon</h1>
      <div className="user-section">

        {/* User Details */}
        <div className="profile-container">
          <p>{userName}</p>
          <div
            className="profile-circle"
            onClick={handleProfileShow}
          >
            {userName.substring(0, 1).toUpperCase()}
          </div>

          {/* drop down and Logout */}
          {profileShow && (
            <div
              className="dropdown-menu"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="dropdown-content" role="none">
                <p className="dropdown-item">
                  Details
                </p>
                <p className="dropdown-item">
                  Settings
                </p>
                <hr></hr>
                <p className="dropdown-item">
                  <button className='logout-button' >
                    Logout
                    {/* <img src={logoutIcon} alt=""></img> */}
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;