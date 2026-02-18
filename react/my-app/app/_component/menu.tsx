import React from "react";
import styles from "./menu.module.scss";
import Link from "next/link";

function MenuComponent() {
  return (
    <nav className={styles.menu}>
      <Link className={styles.menuItem} href="/">
        Start
      </Link>
      <Link className={styles.menuItem} href="/about">
        Über uns
      </Link>
      <Link className={styles.menuItem} href="/blog/123">
        Blog-Beitrag 123
      </Link>{" "}
      <Link className={styles.menuItem} href="/blog/456">
        Blog-Beitrag 456
      </Link>
      <form className={styles.menuItem}>
        <input type="text" placeholder="Suche..." />
      </form>
    </nav>
  );
}
export default MenuComponent;
