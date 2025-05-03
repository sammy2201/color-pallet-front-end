import styles from "../styles/page.module.css";
import "../styles/globals.css";
import HomeHeader from "@/components/div/HomeHeader";
import Footer from "../components/footer";
import MainFeatures from "../components/mainFeatures/MainFeatures";
import YetToComeFeatures from "../components/yetToComeFeatures/YetToComeFeatures";
// import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHeader />
        <MainFeatures />
        <YetToComeFeatures />
        {/* <Pricing /> */}
        {/*
        How It Works
        Simple and Affordable Pricing 
        Contact Us
        Footer */}
        <Footer />
      </main>
    </div>
  );
}
