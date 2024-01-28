"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";

const Login = () => {
  const [err, setError] = useState(false);
  const router = useRouter();

  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  if (session.status === "authenticated") {
    router.push("/dashboard");
    return;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="password"
          required
          className={styles.input}
        />
        <button className={styles.register}>Login</button>
      </form>
      {err && "Something Went Wrong"}
      <div className={styles.signin}>
        <button
          onClick={() => {
            router.push("/dashboard/register");
          }}
          className={styles.button}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            signIn("google");
          }}
          className={styles.button}
        >
          Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
