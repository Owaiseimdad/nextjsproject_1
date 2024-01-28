"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       next: { revalidate: 20 },
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);
  const session = useSession();
  return (
    <div>
      {session.status === "unauthenticated" && (
        <div className={styles.container}>
          <h1>Login Page</h1>
          <Button url={"/dashboard/register"} text={"Register"}></Button>
          <Button url={"/dashboard/login"} text={"SignIn"}></Button>
        </div>
      )}

      {session.status === "loading" && (
        <div className={styles.container}>
          <h1>Loading...</h1>
        </div>
      )}

      {session.status === "authenticated" && (
        <div className={styles.container}>
          <h1>Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            expedita ipsam? At corrupti ducimus illo doloribus autem eveniet
            cum. Quidem eos corporis voluptatibus fuga saepe vitae esse, amet
            repellat ratione?
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
