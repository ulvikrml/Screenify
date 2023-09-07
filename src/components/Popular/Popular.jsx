import React, { useState } from 'react'
// import './style.scss'
import SwitchTabs from '../SwitchTabs/SwitchTabs'
import Carousel from '../Carousel/Carousel'
import useFetch from "../../hooks/useFetch"

const Trending = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  console.log(data);
  const onChangeTab = (tab) => {
    setEndpoint(tab === 'Movie' ? 'movie' : 'tv')
  }
  return (
    <section className='carouselSection'>
      <div className="container">
        <h3 className='sec-title'>Popular</h3>
        <SwitchTabs tabs={['Movie', 'TV Shows']} onChangeTab={onChangeTab} />
      </div>
      <Carousel data={data?.results} loading={loading}/>
    </section>
  )
}

export default Trending