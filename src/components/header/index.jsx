import styles from './header.module.css'
import React, {useState, useEffect} from 'react'

export default function HeaderBox(){

   const [segundos, setSegundos] = useState(new Date().getSeconds())

   useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos(new Date().getSeconds())
        }, 1000);

        return () => clearInterval(intervalo)
   }, []);

   const horas = () =>{
        let dados = new Date()
        let dadosHoras = dados.getHours()

        return dadosHoras
   }

   const minutos = () => {
    let dados = new Date()
    let minutoDados = dados.getMinutes()

    return minutoDados
   }

    return(
       <header className={styles.headerBox}>
            <div>
                wi-fi
            </div>
            <div>
                <span>
                    {horas()}:
                    {minutos()}
                    {segundos}
                </span>
            </div>
       </header>
    );
}