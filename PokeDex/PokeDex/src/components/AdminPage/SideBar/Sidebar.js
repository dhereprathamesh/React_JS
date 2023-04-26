import React from "react";
import { SideBarData } from "./SideBarData";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleIcon from "@mui/icons-material/People";
import "./Sidebar.css";
import { Link, Route } from "react-router-dom";
import { Typography } from "@mui/material";

function Sidebar(props) {
  return (
    <div style={{ display: "flex" }}>
      <div className="Side-bar">
        <div>
          <Typography
            style={{ color: "white", textAlign: "center", margin: "2rem 0" }}
          >
            Admin
          </Typography>
        </div>
        <ul className="Side-bar-list">
          <Link to="/overview" className="title">
            <li className="row">
              <div className="icon">
                <SignalCellularAltIcon />
              </div>
              <div className="title">Pokemon List</div>
            </li>
          </Link>
          <Link to="/dashboard" className="title">
            <li className="row">
              <div className="icon">
                <PeopleIcon />
              </div>

              <div className="title">Dashboard</div>
            </li>
          </Link>
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Sidebar;
