import styles from '../styles/Home.module.css';
import Accueil from './Accueil'
function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <test />
        </h1>
      </main>
    </div>
  );
}

export default Home;
