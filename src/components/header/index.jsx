import styles from './header.module.css'
import React, {useState, useEffect} from 'react'

export default function HeaderBox(){

   const [segundos, setSegundos] = useState(new Date().getSeconds())

   useEffect(() => {
        const intervalo = setInterval(() => {
        const segundoAtual = (new Date().getSeconds())
        let segundoAlterado = segundoAtual < 10 ? '0' + segundoAtual : segundoAtual; 
         

         setSegundos(segundoAlterado)
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

        if (minutoDados < 10) {
            minutoDados =  '0'+ minutoDados
        }
        return minutoDados
   }

   const semanas = () => {
        let dados = new Date()
        let semanaNmero = dados.getDay()
        

        const semanaLista = ['Domingo', 'Segunda', 'Terça',
                        'Quarta', 'Quinta', 'Sexta']
        
        return semanaLista[semanaNmero]        
   }

   const mesAno = () => {
        let dados = new Date()
        let mesNumero = dados.getMonth()

        const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai',
                     'Jun', 'Jul', 'Ago', 'Set', 'Out','Nov', 'Dez']

        return meses[mesNumero]
   }

   const diaHoje = () => {
        let dados = new Date()
        let dia = dados.getDate()

        return dia
   }

    return(
       <header className={styles.headerBox}>
            <div>
                wi-fi
            </div>
            <div>
                <span>
                    <span>{horas()}:
                    {minutos()}:
                    {segundos}
                </span>
                <span>
                    {semanas()},
                    {mesAno()}
                    {diaHoje()}
                </span>
                </span>
            </div>
       </header>
    );
}