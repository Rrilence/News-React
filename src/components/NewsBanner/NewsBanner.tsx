import styles from './styles.module.css'
import Image from '../Image/Image'
import formatTimeAgo from '../../helpres/formatTimeAgo'
import { News } from '../../type'


const NewsBanner = ({item}: {item: News}) => {
console.log(item.image);

    return  <div className={styles.banner}>
            <Image image={item.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
}

export default NewsBanner