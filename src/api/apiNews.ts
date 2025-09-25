import axios from "axios"

const BASE_URL=process.env.REACT_APP_NEWS_API_URL
const API_KEY=process.env.REACT_APP_NEWS_API_KEY

interface Parametrs {
    page_number: number,
    page_size: number,
    category: string,
    keywords: string,
}

export const getNews = async ({page_number = 1, page_size = 10, category, keywords}: Parametrs) => {
    try {
        const res = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords,
            }
        })
        return res.data
    } catch(err) {
        console.log(err);
        
    }
}

export const getCategories = async () => {
    try {
        const res = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return res.data
    } catch(err) {
        console.log(err);
    }
}