import styles from "../styles/page.module.css";
import "../styles/globals.css";
import HomeHeader from "@/components/div/homeHeader";
import Footer from "../components/footer";
import Features from "../components/features/mainFeatures";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHeader />
        <Features />
        {/*
        Yet to Come 
        How It Works
        Simple and Affordable Pricing 
        Contact Us
        Footer */}
        <Footer />
      </main>
    </div>
  );
}
