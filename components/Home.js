import styles from '../styles/Home.module.css';
import AllBurgersSection from './AllBurgersSection/AllBurgersSection';
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
    </div>
  );
}

export default Home;
