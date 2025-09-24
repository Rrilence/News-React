import styles from './styles.module.css'
import { NewsItem } from '../NewsItem/NewsItem'
import { News } from '../../type'

interface INewsList {
    news: News[]
}


export const NewsList = ({news}: INewsList) => {

    return  <ul className={styles.list}>
        {news.map((i) => {
            return <NewsItem key={i.id} item={i}/>
        })}
        </ul>
}


