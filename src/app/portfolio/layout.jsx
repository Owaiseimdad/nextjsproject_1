import React from "react";
import style from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={style.maintitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
