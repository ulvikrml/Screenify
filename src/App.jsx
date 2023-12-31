import { useEffect } from 'react';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import Navbar from './layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './layout/Footer/Footer';
import Details from './pages/Details/Details';
import PageNotFound from './pages/404/PageNotFound'
import Explore from './pages/Explore/Explore';
import SearchResult from './pages/Search/SearchResult';

import { useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import { fetchDataFromApi } from './utilities/api';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchApiConfiguration()
  }, [])
  const fetchApiConfiguration = () => {
    fetchDataFromApi('/configuration').then((res) => {
    
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
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
      </Routes>
      <Footer/>
    </Routers>
  )
}

export default App