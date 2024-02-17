import BodyUm from '../body-1'
import BodyDois from '../body-2'
import BodyTres from '../body-3'
import BodyQuatro from '../body-4'
import BodyCinco from '../body-5'
import BodySeis from '../body-6'
import HeaderBox from '../header'
import FooterBox from '../footer'
import styles from './bodyMother.module.css'


function bodyMother() {
    return(
    
    <main className={styles.bodyMother}>
        <div className={styles.headerBox}>
            <HeaderBox /> 
        </div>
        <div className={styles.body_1}>
            <BodyUm />
        </div>
        <div className={styles.body_2}>    
            <BodyDois />
        </div>
        <div className={styles.body_3}>       
            <BodyTres />
        </div>
        <div className={styles.body_4}>     
            <BodyQuatro />
        </div>
        <div className={styles.body_5}>  
            <BodyCinco />
        </div>
        <div className={styles.body_6}>       
            <BodySeis />
        </div>
        <div className={styles.footerBox}>
            <FooterBox />
        </div>
    </main>
    );
}

export default bodyMother;