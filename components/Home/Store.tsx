import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Stores = () => {
    const [stores, setStores] = useState([])

    const getStores = async()=>{
        const res = await fetch(`https://api.rawg.io/api/stores?key=${process.env.NEXT_PUBLIC_KEY}`)
        const data = await res.json()
        console.log(data);
         setStores(data.results)
    }

    useEffect(()=>{
        getStores()
    },[])

  return (
    <div>
        {stores.map((store: any, index: number)=>(
            <Store key={index} store={store} />
        ))}
    </div>
  )
}

export default Stores

function Store({store}: any){
    const [img, setImg] = useState('')

   const getStoreLogo = async()=>{
        const options = {
            method: 'GET',
            url: 'https://bing-image-search1.p.rapidapi.com/images/search',
            params: {q: store.name},
            headers: {
              'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
              'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_RAPID}`
            }
          };
          const res: any = await axios.request(options)
          const img = await res.results
          setImg(img)
    }

    useEffect(()=>{
        getStoreLogo()
    },[])

    return(
        <div className="">
            <img src={img} alt="" />
            store
        </div>
    )
}