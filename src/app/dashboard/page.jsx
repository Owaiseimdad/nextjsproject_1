import React from "react";
// import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 20 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;
