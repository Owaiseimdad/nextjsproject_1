import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./../../public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Ideas into reality, We bring a team globally
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.items}>
        <Image src={Hero} className={styles.img} />
      </div>
    </main>
  );
}
