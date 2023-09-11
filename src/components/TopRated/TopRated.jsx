import React, { useState } from 'react'

import SwitchTabs from '../SwitchTabs/SwitchTabs'
import Carousel from '../Carousel/Carousel'
import useFetch from "../../hooks/useFetch"

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onChangeTab = (tab) => {
    setEndpoint(tab === 'Movie' ? 'movie' : 'tv')
  }
  return (
    <section className='carouselSection'>
      <div className="container">
        <h3 className='sec-title'>Top Rated</h3>
        <SwitchTabs tabs={['Movie', 'TV Shows']} onChangeTab={onChangeTab} />
      </div>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </section>
  )
}

export default TopRated