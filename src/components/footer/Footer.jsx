import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 - Owaise Imdad - All right reserved in RBI 😅</div>
      <div className={styles.images}>
        <Image src="/1.png" width={25} height={25} />
        <Image src="/2.png" width={25} height={25} />
        <Image src="/3.png" width={25} height={25} />
        <Image src="/4.png" width={25} height={25} />
      </div>
    </div>
  );
};

export default Footer;
