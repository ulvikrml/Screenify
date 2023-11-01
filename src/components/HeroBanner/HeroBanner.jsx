import './style.scss'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import Image from '../LazyLoadImage/Image';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const { data, loading } = useFetch('/movie/upcoming')
  const [query, setQuery] = useState("");
  const { url } = useSelector(state => state.home)
  const navigate = useNavigate();

  useEffect(() => {
    const bgImage = url?.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bgImage)
  }, [data, url.backdrop])

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const queryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  }
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
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button onClickCapture={queryHandler}>Search</button>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner