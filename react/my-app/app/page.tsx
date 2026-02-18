import Image from "next/image";
import styles from "./page.module.scss";

import SimpleComponent from "./_component/simple";

// Startseite der App, wird unter der Route "/" angezeigt
export default function Home() {
  return (
    <>
      <h1>Willkommen</h1>

      <h1>Hallo Welt</h1>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

      <h2>Komponente:</h2>
      <SimpleComponent />
    </>
  );
}
