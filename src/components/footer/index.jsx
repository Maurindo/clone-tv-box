import styles from "./footer.module.css"

function FooterBox(){
    return(
        <footer className={styles.footerBox}>
            <div>
                <h3>Item_1</h3>
            </div>
            <div>
                <h3>Item_2</h3>
            </div>
            <div>
                <h3>Item_3</h3>
            </div>
            <div>
                <h3>Item_4</h3>
            </div>            
        </footer>
    );
}


export default FooterBox;
