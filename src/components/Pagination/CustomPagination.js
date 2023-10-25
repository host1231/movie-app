// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import PaginationControlled from "./Pagination";
import "./CustomPagination.scss";

function CustomPagination({ page, setPage }) {

    // const handleChange = (e) => {
    //     setPage(e.target.textContent);
    //     window.scroll(0, 0);
    // }

    return (
        <div className="movies__pagination">
            {/* <Pagination count={10} onChange={handleChange} size='large' color='primary' hidePrevButton hideNextButton /> */}
            <PaginationControlled page={page} setPage={setPage} />
        </div>
    )
}

export default CustomPagination;