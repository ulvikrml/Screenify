import { useEffect } from 'react';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import Navbar from './layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './layout/Footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

import useFetch from './hooks/useFetch';
import { fetchDataFromApi } from './utilities/api';

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector(state => state.home)
  useEffect(() => {
    fetchApiConfiguration()
  }, [])
  const fetchApiConfiguration = () => {
    fetchDataFromApi('/configuration').then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original'
      }
      dispatch(getApiConfiguration(url))
    }
    )

  }
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Routers>
  )
}

export default App