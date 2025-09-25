import styles from './styles.module.css'

interface IPagination {
    totalPages: number, 
    handleNextPage: () => number, 
    handlePreviosPage: () => number, 
    handlePageClick: (pageNumber: number) => number, 
    currentPage: number,
}

const Pagination = ({totalPages, handleNextPage, handlePreviosPage, handlePageClick, currentPage} : IPagination) => {

    return  (
        <div className={styles.pagination}>
            <button onClick={handlePreviosPage} className={styles.arrow} disabled={currentPage <= 1}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button onClick={() => handlePageClick(index + 1)} className={styles.pageNumber}
                     key={index}
                     disabled={index + 1 === currentPage}>{index + 1}</button>
                })}
            </div>
            <button onClick={handleNextPage} className={styles.arrow} disabled={currentPage >= totalPages}>{'>'}</button>
        </div>
    )
}

export default Pagination