import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

import DetailsBanner from '../../components/DetailsBanner/DetailsBanner'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'
import './style.scss'

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div className='details-section'>
      <DetailsBanner crew={credits?.crew} />
      <div className="carousels">
        <Similar mediaType={mediaType} id={id} />
        <Recommendation mediaType={mediaType} id={id} />
      </div>
    </div>
  )
}

export default Details