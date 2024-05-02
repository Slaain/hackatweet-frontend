import Accueil from './Accueil';;
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.variable.min.css';
import Image from 'next/image';
function Home () {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.contenantright}>
      
      <Image src='/logo.png'
       alt="Logo"
       width={60}
       height={60}
     />
   
<div className={styles.titre}>
        See what's <br/>happening
      
      <div className={styles.soustitre}>
        Join Hackatweet today.
      </div>
     </div>
    <Accueil/>
    
    </div>
    </div>
    </>
  );
};

export default Home;
