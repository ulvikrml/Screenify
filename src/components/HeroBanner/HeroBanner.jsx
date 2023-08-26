import './style.scss'
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
    const {data} = useFetch('/configuration')
    console.log(data);
    useEffect(()=>{
    },[])
  return (
    <div className='heroBanner'>

    </div>
  )
}

export default HeroBanner