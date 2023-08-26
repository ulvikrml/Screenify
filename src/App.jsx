import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utilities/api'

function App() {
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res);
      })
  }
  return (
    <>
    </>
  )
}

export default App