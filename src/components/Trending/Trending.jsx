import React, { useState } from 'react'
import './style.scss'
import SwitchTabs from '../SwitchTabs/SwitchTabs'
import Carousel from '../Carousel/Carousel'
import useFetch from "../../hooks/useFetch"

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  // console.log(data);
  const onChangeTab = (tab) => {
    setEndpoint(tab === 'Week' ? 'week' : 'day')
  }
  return (
    <section className='carouselSection'>
      <div className="container">
        <h3 className='sec-title'>Trending</h3>
        <SwitchTabs tabs={['Days', 'Week']} onChangeTab={onChangeTab} />
      </div>
      <Carousel data={data?.results} loading={loading}/>
    </section>
  )
}

export default Trending