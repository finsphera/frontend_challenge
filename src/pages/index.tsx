import Banner from "@/components/Banner/Banner"
import CategoryRow from "@/components/CategoryRow/CategoryRow"
import { insecureFetchFromAPI } from "@/requests/api"
import { IMoviesResponse, ITVSeriesData } from "@/types/Movies"
import { REQUESTS } from "@/utils/constants"
import { Random } from "@/utils/helpers"
import { GetServerSideProps } from "next"

interface IHome {
  popularMovies: IMoviesResponse
  popularTvSeries: IMoviesResponse
}

const Home = ({
  popularMovies,
  popularTvSeries
}: IHome) => {
  return (
    <main
      style={{
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column'
      }}
    >
      <Banner
        randomMovie={Random(popularMovies.results)}
      />
      <CategoryRow
        data={popularMovies.results}
        title="Lo mas popular"
      />
      <CategoryRow
        data={popularTvSeries.results}
        title="Lo mas popular"
      />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const popularMoviesData = await insecureFetchFromAPI(REQUESTS.popularMovieList)
    const popularTvSeriesData = await insecureFetchFromAPI(REQUESTS.popularTvSeriesList)

    return {
      props: {
        popularMovies: popularMoviesData.data,
        popularTvSeries: popularTvSeriesData.data,
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
