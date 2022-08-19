import { Button, ButtonProps, styled } from '@mui/material'
import { blue } from '@mui/material/colors';
import React from 'react'
import { BiX } from 'react-icons/bi';

const PostForm = ({setPostForm}: any) => {
    const [preview, setPreview] = React.useState({sate: false, src: ''})

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        backgroundColor: '#7b00ff',
        '&:hover': {
          backgroundColor: '#5900ff',
        },
      }));

      const handleFileChange = (e: any) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (e: any) => {
            setPreview({sate: true, src: e.target.result})
        }
        reader.readAsDataURL(file)
    }
      
  return (
    <div 
    className='absolute flex items-center justify-center top-0 z-50 left-0 h-full w-full bg-black/70'>
        <div onClick={() => setPostForm(false)}
         className="absolute z-[51] h-full top-0 left-0 w-full"></div>
        <div className="flex z-[52] relative p-2 flex-col w-4/5 bg-stone-800 tablet:w-[500px]">
            <BiX onClick={()=> setPostForm(false)}
             className='text-2xl cursor-pointer hover:text-violet-700 absolute top-1 right-1' />
            <h2 className='text-center'>Post Something</h2>
            <textarea className='outline-none p-2 h-[15vh] bg-transparent border-2 border-violet-600'
            name="" id="" maxLength={1000}></textarea>
            {preview.sate &&<img className='h-[20vh] my-1' src={preview.src} alt="" />}
            <div className="flex w-full items-center mt-2 justify-between">
                <label htmlFor='postfile' className='py-[0.4rem] rounded-md px-3 bg-violet-700'>Add a Photo</label>
                <ColorButton variant='contained'
                sx={{backgroungColor: 'pink'}} className='py-1 px-3'>Post</ColorButton>
                <input onChange={handleFileChange}
                 className='hidden' type="file" name="" id="postfile" />
            </div>
        </div>
    </div>
  )
}

export default PostForm