import PaginationControlled from "./Pagination";
import "./CustomPagination.scss";

function CustomPagination({ page, setPage }) {
    return (
        <div className="movies__pagination">
            <PaginationControlled page={page} setPage={setPage} />
        </div>
    )
}

export default CustomPagination;