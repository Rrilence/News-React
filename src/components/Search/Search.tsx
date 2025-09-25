import styles from './styles.module.css'

interface Keywords {
    keywords: string,
    setKeywords: (keyword: string) => void
}

const Search = ({keywords, setKeywords}: Keywords) => {

    return  <div className={styles.search}>
            <input 
            type="text" 
            value={keywords}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeywords(e.currentTarget.value)}
            className={styles.input}
            placeholder='JavaScript' />
        </div>
}

export default Search