import styles from '../styles/Home.module.css';
import AllBurgersSection from './AllBurgersSection/AllBurgersSection';
import CategorySection from './CategorySection/CategorySection';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import NewsletterSection from './NewsletterSection/NewsletterSection';

function Home() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <AllBurgersSection/>
        <NewsletterSection/>
        <CategorySection/>
        <div className={styles.img_container}>
          <p>Venez découvrir notre nouveau restaurant ! 🍔</p>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
