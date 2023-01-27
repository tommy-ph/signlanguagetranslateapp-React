import React, { useContext, useState } from "react";
import {NavLink } from "react-router-dom";
import "./header.css";
import { Context } from "../../context/userProvider";
export const Header = () => {
  const { user } = useContext(Context);
  const [show, setShow] = useState(false);

  return (
    <div className="header-container">
      <p className="logo">Lost in translation</p>
      <div>
        {user && (
          <div className="profile-container">
            <p>{user.username}</p>
            <div className="user-image" onClick={() => setShow(!show)}>
              <div className={`dropdown-container ${show ? "show" : "hide"}`}>
                <div>
                  <NavLink
                    className={`link-item ${({ isActive }) => isActive ? "active" : undefined}`}
                    to="translate"
                  >
                    Translate
                  </NavLink>
                </div>
                <div>
                  <NavLink className={`link-item ${({ isActive }) => isActive ? "active" : undefined}`}
                   to="profile">
                    Profile
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
