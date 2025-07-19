import styles from "../styles/page.module.css";
import "../styles/globals.css";
import HomeHeader from "../components/home/div/HomeHeader";
import Footer from "../components/footer";
import MainFeatures from "../components/home/mainFeatures/MainFeatures";
import YetToComeFeatures from "../components/home/yetToComeFeatures/YetToComeFeatures";
import Pricing from "../components/home/pricing/Pricing";
// import Contact from "@/components/home/contact/Contact";
import HomePageNavbar from "../components/navbar/HomePageNavbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePageNavbar />
        <HomeHeader />
        <MainFeatures />
        <YetToComeFeatures />
        <Pricing />
        {/* <Contact /> */}
        <Footer />
      </main>
    </div>
  );
}
