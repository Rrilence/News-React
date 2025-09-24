import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews';
import {NewsList} from '../../components/NewsList/NewsList'


const Main = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await getNews();
                console.log("res.news in Main:", res.news); 

                if (res && res.news && Array.isArray(res.news)) {
                    setNews(res.news);
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

    if (loading) {
        return <main className={styles.main}>Загрузка...</main>;
    }

    return (
        <main className={styles.main}>
            {console.log("news in Main:", news)} {/* Проверяем данные перед рендерингом */}
            {news && news.length > 0 ? <NewsBanner item={news[0]} /> : <p>Нет новостей</p>}
            <NewsList news={news}/>
        </main>
    );
}

export default Main;