import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews';
import {NewsList} from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton';


const Main = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                const res = await getNews();
                if (res && res.news && Array.isArray(res.news)) {
                    setNews(res.news);
                    setLoading(false)
                } else {
                    console.error("Неправильный формат данных из API:", res);
                }

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    return (
        <main className={styles.main}>
            {news && news.length > 0 && !loading ? <NewsBanner item={news[0]} /> : <Skeleton type={'banner'} count={1}/>}
            {
                !loading ? <NewsList news={news}/> 
                : <Skeleton type={'item'} count={10}/>
            }
        </main>
    );
}

export default Main;