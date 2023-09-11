import './style.scss'
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Image from '../LazyLoadImage/Image';
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const { data, loading } = useFetch('/movie/upcoming')
  const { url } = useSelector(state => state.home)
  
  useEffect(() => {
    const bgImage = url?.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bgImage)
  }, [data, url.backdrop])
  return (
    <section className='heroBanner'>
      <div className="backdrop-image">
        <Image src={background || ''} />
      </div>
      <div className="opacity-layer"></div>
      <div className="heroBanner-content">
        <span className="title">Welcome.</span>
        <span className="subTitle">
          Millions of movies, TV shows and people to discover.
          Explore now.
        </span>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
          />
          <button>Search</button>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner