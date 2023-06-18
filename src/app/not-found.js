import styles from "./common.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>
        <div>
          <h1>404</h1>
        </div>
        <div>
          <h2>Not Found</h2>
        </div>
        <p>Could not find requested resource</p>
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
