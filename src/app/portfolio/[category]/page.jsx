import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.blogTitle}>{params.category}</h1>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            recusandae magni quaerat cum facilis officia repudiandae dolor
            similique, molestiae ab aperiam labore odit nisi ipsam iure soluta,
            voluptas aut sit.
            <br />
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, vero
            aliquam deserunt fugit odio obcaecati commodi magnam veritatis
            corrupti autem at distinctio accusamus natus, ipsa asperiores a
            dolor culpa possimus.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.image}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="illustration"
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            recusandae magni quaerat cum facilis officia repudiandae dolor
            similique, molestiae ab aperiam labore odit nisi ipsam iure soluta,
            voluptas aut sit.
            <br />
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, vero
            aliquam deserunt fugit odio obcaecati commodi magnam veritatis
            corrupti autem at distinctio accusamus natus, ipsa asperiores a
            dolor culpa possimus.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.image}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="illustration"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
