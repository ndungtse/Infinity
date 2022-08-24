import { LoadingButton } from '@mui/lab';
import { Button, ButtonProps, styled } from '@mui/material'
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'
import { BiX } from 'react-icons/bi';
import { postApi, postCustom } from '../../contexts/apiCallMethods';
import { useApp } from '../../contexts/AppContext';
import { usePosts } from '../../contexts/PostContext';

const PostForm = ({setPostForm}: any) => {
    const [preview, setPreview] = React.useState({sate: false, src: ''})
    const [imgString, setImgString] = React.useState('')
    const [data, setData] = React.useState<any>({ text: '', pictures: [], creatorId: '', videos: [] })
    const { user, authHeaders } = useApp()
    const [uploading, setUploading] = useState(false)
    const { getPosts } = usePosts()

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        backgroundColor: '#7b00ff',
        '&:hover': {
          backgroundColor: '#5900ff',
        },
      }));

      const handleFileChange = (e: any) => {
        const file = e.target.files[0]
        setPreview({sate: true, src: URL.createObjectURL(file)})
        const reader = new FileReader()
        reader.onload = (e: any) => {
          setImgString(e.target.result)
        }
        reader.readAsDataURL(file)
        console.log(imgString)
      }
    
      const handleSubmit = async (e: any) => {
        e.preventDefault()
        setUploading(true)
        try {
            setData({...data, pictures: [ imgString ], creatorId: user._id})
            const res = await postCustom('api/posts/newPost', {...data, pictures: [ imgString ], creatorId: user._id}, {
              headers: authHeaders
            })
            if(res.message === 'Created'){
              setData({ text: '', pictures: [], creatorId: '', videos: [] })
              setPreview({sate: false, src: ''})
              getPosts()
              setPostForm(false)
              setImgString('')
            }
        } catch (error) {
          console.log(error);
          setUploading(false)
        }
        
        setUploading(false)
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
            <textarea onChange={(e) => setData({...data, text: e.target.value})}
             className='outline-none p-2 h-[15vh] bg-transparent border-2 border-violet-600'
            name="" id="" maxLength={1000}></textarea>
            {preview.sate && <div className='h-[20vh] w-full'>
            <img className='max-h-full mx-auto object-cover my-1' src={preview.src} alt="" /></div>}
            <div className="flex w-full items-center mt-4 justify-between">
                <label htmlFor='postfile' className='py-[0.4rem] rounded-md cursor-pointer px-3 bg-violet-700'>Add a Photo</label>
                {uploading?(
                  <LoadingButton sx={{backgroundColor: '#75067f', width: 150}} loading variant="outlined">
                  Submit
                </LoadingButton>
                ):(
                <ColorButton variant='contained' onClick={handleSubmit}
                sx={{backgroungColor: 'pink'}} className='py-1 px-3'>Post</ColorButton>
                )}
                <input onChange={handleFileChange} accept="image/jpg, image/jpeg, image/png"
                 className='hidden' type="file" name="" id="postfile" />
            </div>
        </div>
    </div>
  )
}

export default PostForm