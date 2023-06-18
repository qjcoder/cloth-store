import Link from "next/link";
import Image from "next/image";
import styles from "@/app/common.module.css";
import heroStyles from "./hero-section.module.css";

const HeroSection = ({ title, imgUrl, desc }) => {
  return (
    <main>
      <div className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              {/* <h1>Be Yourself in A Luxury Style </h1> */}
              <h1>{title}</h1>
              <p>{desc}</p>
              <Link href="/pages/cloth">
                <button>Explore Collections</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <Image src={imgUrl} alt="cloth banner" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
