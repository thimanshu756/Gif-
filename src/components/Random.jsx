import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
  const [gif , Setgif]= useState('');

  async function fetchdata(){
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}= await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    Setgif(imageSrc);
    console.log(imageSrc);
  }
  useEffect(()=>{
  fetchdata()
  },[])
  function clickHandler(){
    fetchdata();
  }
  return (
  <div className="w-1/2 p- bg-green-500 rounded-lg border border-black 
  flex flex-col items-center gap-y-5 mt-[15px] absolute left-80 ">
    <h1 className="text-2xl underline uppercase font-bold">Random Gif</h1>
    <img src={gif} width="450" />
    <button onClick={clickHandler} className="w-10/12 bg-yellow-400  rounded-md mb-[20px]">Generate Random</button>
  </div>
  )
}

