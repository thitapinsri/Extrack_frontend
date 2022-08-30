import './Pagination.css'

const Pagination = ({ cardPerPage, totalCards, paginate, currentPage}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
        pageNumbers.push(i)
    }

    const previousPage = () => {
        if (currentPage > 1) paginate(currentPage-1)
    }

    const nextPage = () => {
        if (currentPage < pageNumbers.length) paginate(currentPage+1)
    }



    return (
        <div id="pagination">
            <a onClick={previousPage}>&laquo;</a>
            {pageNumbers.map(num => {
                if (num == currentPage) {
                    return <a key={num} className='page active' onClick={() => paginate(num)}>
                        {num}
                    </a>
                }
                return (
                    <a key={num} className='page' onClick={() => paginate(num)}>
                        {num}
                    </a>
                )
            })}
            <a onClick={nextPage}>&raquo;</a>
        </div>
    )
}

export default Pagination