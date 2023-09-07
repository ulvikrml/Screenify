import HeroBanner from "../../components/HeroBanner/HeroBanner"
import Trending from "../../components/Trending/Trending"
import Popular from '../../components/Popular/Popular'
import TopRated from "../../components/TopRated/TopRated"
const Home = () => {
  return (
    <main>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </main>
  )
}

export default Home