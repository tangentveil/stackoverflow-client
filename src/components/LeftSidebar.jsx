import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../assets/Globe.svg";
import menu from "../assets/bars-solid.svg";

const LeftSidebar = ({ sidebar }) => {
  return (
    <>
      {sidebar ? (
        ""
      ) : (
        <div className="home-container-1">
          <div className="left-sidebar">
            <nav className="side-nav">
              {/* <img src={menu} width={20} alt="" /> */}
              <NavLink
                to="/"
                className="side-nav-links"
                activeclassname="active"
              >
                <p>Home</p>
              </NavLink>
              <div className="side-nav-div">
                <div>
                  <p>PUBLIC</p>
                </div>
                <NavLink
                  to="/Questions"
                  className="side-nav-links"
                  activeclassname="active"
                >
                  <img src={Globe} alt="Globe" width={18} />
                  <p style={{ paddingLeft: "10px" }}>Questions</p>
                </NavLink>

                <NavLink
                  to="/Tags"
                  className="side-nav-links"
                  activeclassname="active"
                  style={{ paddingLeft: "40px" }}
                >
                  <p style={{ paddingLeft: "10px" }}>Tags</p>
                </NavLink>

                <NavLink
                  to="/Users"
                  className="side-nav-links"
                  activeclassname="active"
                  style={{ paddingLeft: "40px" }}
                >
                  <p style={{ paddingLeft: "10px" }}>Users</p>
                </NavLink>

                <NavLink
                  to="/chat"
                  className="side-nav-links"
                  activeclassname="active"
                  style={{ paddingLeft: "40px" }}
                >
                  <p style={{ paddingLeft: "10px" }}>Chat Bot</p>
                </NavLink>

                <NavLink
                  to="/payment"
                  className="side-nav-links"
                  activeclassname="active"
                  style={{ paddingLeft: "40px" }}
                >
                  <p style={{ paddingLeft: "10px" }}>Payment</p>
                </NavLink>

                <NavLink
                  to="/community"
                  className="side-nav-links"
                  activeclassname="active"
                  style={{ paddingLeft: "40px" }}
                >
                  <p style={{ paddingLeft: "10px" }}>Community</p>
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
