"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import DarkLightMode from "../DarkLightMode/DarkLightMode";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [activetab, setActiveTab] = useState("Home");
  const session = useSession();

  const clickLinks = (event) => {
    setActiveTab(event.target.name);
    document.querySelectorAll('[class*="links"]>a').forEach((e) => {
      e.className = "";
    });

    if (event.target.className != "active") {
      event.target.className += "active";
    }

    console.log(activetab);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        GenBlog
      </Link>
      <div className={styles.links}>
        <DarkLightMode />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={styles.link}
            onClick={clickLinks}
            name={link.title}
          >
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
