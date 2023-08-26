import * as _ from 'lodash';

function Pagination({ props }) {

    const { limit, items, currentPage, setCurrentPage } = props;

    const totalPages = Math.ceil(items.length / limit);
    const pages = _.range(1, totalPages + 1);

    const handlePageChange = (page) => {
        if(page < 1) return;
        if(page > totalPages) return;
        if(page === currentPage) return;
        setCurrentPage(page);
    }

    return ( 

        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item" onClick={() => handlePageChange(currentPage - 1)} style={{cursor: "pointer"}}>
                    <span className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                </li>
                {
                    pages.map((page, index) => <li key={ index } className="page-item" onClick={() => handlePageChange(page)} style={{cursor: "pointer"}}><span className="page-link" >{ page }</span></li>)
                }
                <li className="page-item" onClick={() => handlePageChange(currentPage + 1)} style={{cursor: "pointer"}}>
                    <span className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;