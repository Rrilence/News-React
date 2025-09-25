import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews';
import {NewsList} from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Category from '../../components/Category/Category';


const Main = () => {

    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [SelectCategories, setSelectCategories] = useState("All");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
            try {
                setLoading(true)
                const res = await getNews({
                    page_number: currentPage,
                    page_size: pageSize,
                    category: SelectCategories === "All" ? null : SelectCategories
                });
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

    const fetchCategories = async () => {
        try {
            const res = await getCategories();
                setCategories(["All", ...res.categories]);
                console.log(...res.categories);
                
        } catch (error) {
            console.error(error);
    }
}

    useEffect(() => {
        fetchCategories()
    }, [categories])

    useEffect(() =>  {
        fetchNews(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePreviosPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handlePageClick = (pageNumber) => {
            setCurrentPage(pageNumber)
    }

    return (
        <main className={styles.main}>
            <Category categories={categories} setSelectCategories={setSelectCategories} SelectCategories={SelectCategories}/>
            {news && news.length > 0 && !loading ? <NewsBanner item={news[0]} /> : <Skeleton type={'banner'} count={1}/>}
            <Pagination 
            totalPages={totalPages} 
            handleNextPage={handleNextPage} 
            handlePreviosPage={handlePreviosPage} 
            handlePageClick={handlePageClick}
            currentPage={currentPage}/>
            {
                !loading ? <NewsList news={news}/> 
                : <Skeleton type={'item'} count={10}/>
            }
            <Pagination 
            totalPages={totalPages} 
            handleNextPage={handleNextPage} 
            handlePreviosPage={handlePreviosPage} 
            handlePageClick={handlePageClick}
            currentPage={currentPage}/>
        </main>
    );
}

export default Main;