import styles from './styles.module.css'

type imageProp = {
    image: string
}

const Image = ({image}: imageProp) => {

    return  <div className={styles.wrapper}>
        {image ? <img src={image} alt='news' className={styles.image}></img> : null}
        </div>
}

export default Image