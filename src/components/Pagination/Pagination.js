import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ page, setPage }) {
    const handleChange = (event, value) => {
        setPage(value);
        window.scroll(0, 0);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange} color='primary' hideNextButton hidePrevButton/>
        </Stack>
    );
}