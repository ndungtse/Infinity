import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';

type Props = {
    top:  () => void
}

export default function PaginationRanges({top}: Props) {
    const router = useRouter()
    const [status, setStatus] = React.useState('')
    const [value, setValue] = React.useState('1')

    const goToNextPage = (e: React.ChangeEvent<unknown>, value: number)=>{
        e.preventDefault()
        if (value<=30000) {
          router.push(`/store/${value}`)
          top()
        }  else{
          setStatus('Please select a page between 1 and 30,000')
        }
    }
    const subPage = (e: React.ChangeEvent<unknown>)=>{
        e.preventDefault()
        if (Number(value)<=30000) {
          router.push(`/store/${value}`)
          top()
        }  else{
          setStatus('Please select a page between 1 and 30,000')
        }
    }
    
  return (
    <div className="flex items-center w-full flex-col mt-8">
      <p>Jump To:</p>
      <div className="flex items-center">
      <form onSubmit={subPage}
       className="rounded-l flex bg-stone-800 w-[230px] py-2 pl-3 justify-between">
        <input onChange={(e)=>setValue(e.target.value)}
         className='w-[200px] outline-none input
        bg-transparent' type="number" placeholder="Page Number<30000" />
      </form>
      <button className='bg-violet-700 h-full px-3'
         type="submit">Go</button>
      </div>
      <p className='text-violet-700'>{status}</p>
    <Stack spacing={2} sx={{color: "#FFF", margin: '20px auto'}}>
      <Pagination
      onChange={goToNextPage}
       sx={{color: "#FFF"}} count={30000} defaultPage={1} boundaryCount={2} />
    </Stack>
    </div>
  );
}
