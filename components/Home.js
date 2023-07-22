import styles from '../styles/Home.module.css';
import AllBurgersSection from './AllBurgersSection/AllBurgersSection';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';

function Home() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <AllBurgersSection/>
    </div>
  );
}

export default Home;
