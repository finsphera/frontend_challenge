import Banner from "@/components/Banner/Banner"
import { insecureFetchFromAPI } from "@/requests/api"
import { IMoviesResponse } from "@/types/movies"
import { REQUESTS } from "@/utils/constants"
import { GetServerSideProps } from "next"

const Home = ({
  ...props
}: IMoviesResponse) => {
  return (
    <main
      style={{display: 'flex', height: '100vh', width: '-webkit-fill-available'}}
    >
      <Banner
        randomMovie={props.results[Math.floor(Math.random() * props.results.length - 1)]}
      />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    let data = await insecureFetchFromAPI(REQUESTS.popularMovieList)
    return {
      props: {
        ...data.data
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Failed to fetch data'
      }
    }
  }
};

export default Home
