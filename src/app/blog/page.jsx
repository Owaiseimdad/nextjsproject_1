import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3001/api/posts", {
    next: { revalidate: 20 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      <div className={styles.items}>
        {data.map((item) => (
          <Link
            href={`/blog/${item._id}`}
            className={styles.link}
            key={item._id}
          >
            <div className={styles.image}>
              <Image
                src="https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className={styles.img}
                width={400}
                height={250}
              />
            </div>
            <div className={styles.content}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
