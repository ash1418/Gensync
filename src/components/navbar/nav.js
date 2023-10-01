import React from "react";
import style from "./nav.module.css";
import { Outlet } from "react-router-dom";

function Nav() {
  
  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src="https://cdn-icons-png.flaticon.com/128/3665/3665939.png"
            alt="logo"
          />
          <h4>Gensync</h4>
        </div>
        <div className={style.nav_details}>
          <button>Home</button>
          <button>Notices</button>
          <button>Announcement</button>
          <button>Events</button>
          <button>Alumni</button>

        </div>
      </div>
    </nav>
    <Outlet />
    
    </>
  );
}

export default Nav;