import React, { useEffect, useState } from "react"
import { formatDate } from "../../helpres/formatDate";
import styles from './styles.module.css'



const Header = () => {

    const [data, setData] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => { setData(new Date()) }, 1000)
        return () => clearInterval(interval)
    }
    ,)


    return  <header className={styles.header}>
            <h1 className={styles.title}>News Reactify</h1>
            <p className={styles.date}>{formatDate(data)}</p>
        </header>
}

export default Header