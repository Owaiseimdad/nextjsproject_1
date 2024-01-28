"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setError] = useState(false);
  const router = useRouter();
  // handling the submition of the register form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log(name, password, email);

    // fetch method for register api
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  // returning jsx of the register page
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          required
          className={styles.input}
        />
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
        <button className={styles.register}>Register</button>
      </form>
      {err && "Something Went Wrong"}
      <Link href="/dashboard/login" className={styles.loginThirdParty}>
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
