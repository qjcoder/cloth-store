import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.main_header}>
      <div className={style.navbar_brand}>
        <Link href="/">
          <Image src="/logo.jpg" alt="Joi logo img" width={80} height={80} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
