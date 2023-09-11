import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {mediaType, id} = useParams();
    const {data,loading} = useFetch(`/${mediaType}/${id}`)
  return (
    <div>Details</div>
  )
}

export default Details