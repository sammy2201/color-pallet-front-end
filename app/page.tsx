import styles from "../styles/page.module.css";
import "../styles/globals.css";
import HomeHeader from "@/components/div/homeHeader";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHeader />
        <Footer />
      </main>
    </div>
  );
}
