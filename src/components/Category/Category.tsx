import styles from './styles.module.css'

interface Categories {
    categories: string[],
    setSelectCategories: (cat: string) => string,
    SelectCategories: string
}

const Category = ({categories, setSelectCategories, SelectCategories}: Categories) => {


    return  <div className={styles.category}>
            {categories.map(cat => {
                return (
                    <button className={SelectCategories === cat ?  styles.active : styles.item} key={cat}
                    onClick={() => setSelectCategories(cat)}>
                        {cat}
                    </button>
                )
            })}
        </div>
}

export default Category