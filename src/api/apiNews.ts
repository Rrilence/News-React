import axios from "axios"

const BASE_URL=process.env.REACT_APP_NEWS_API_URL
const API_KEY=process.env.REACT_APP_NEWS_API_KEY

export const getNews = async (page_number = 1, page_size = 10) => {
    try {
        const res = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
            }
        })
        return res.data
    } catch(err) {
        console.log(err);
        
    }
}