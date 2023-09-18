import Head from "next/head";
import Analysis from "../components/Analysis";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Client Verbatim Analysis</title>
        <meta name="description" content="Analyse de verbatim client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Analyse de verbatim client</h1>
        <div className={styles.analysisContainer}>
          <Analysis />
        </div>
      </main>
    </>
  );
}
