import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ page, setPage }) {
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange} color='primary' hideNextButton hidePrevButton/>
        </Stack>
    );
}