import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.blogTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.items} key={item.id}>
          <div className={styles.content}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.image}>
            <Image
              fill={true}
              src={item.image}
              alt={params.category}
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
