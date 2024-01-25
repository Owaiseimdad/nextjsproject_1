import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 20 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const PageBlog = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.items}>
        <div className={styles.banner}>
          <div className={styles.summaryContain}>
            <div className={styles.summary}>{data.body}</div>
            <div className={styles.author}>
              <Image
                src="/4.png"
                width={40}
                height={40}
                className={styles.profile}
              />
              <div className={styles.userid}>Owaise Imdad</div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=800"
              width={500}
              height={300}
              className={styles.images}
            />
          </div>
        </div>
        <div className={styles.blogContain}>{data.body}</div>
      </div>
    </div>
  );
};

export default PageBlog;
