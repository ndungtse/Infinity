import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';

type Props = {
    top:  () => void
}

export default function PaginationRanges({top}: Props) {
    const router = useRouter()

    const goToNextPage = (e: React.ChangeEvent<unknown>, value: number)=>{
        router.push(`/store/${value}`)
        top()
    }

  return (
    <Stack spacing={2} sx={{color: "#FFF", margin: '20px auto'}}>
      <Pagination
      onChange={goToNextPage}
       sx={{color: "#FFF"}} count={30000} defaultPage={1} boundaryCount={2} />
    </Stack>
  );
}
