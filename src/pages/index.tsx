import Banner from "@/components/Banner/Banner"
import CategoryRow from "@/components/CategoryRow/CategoryRow"
import Container from "@/components/Container/Container"
import { insecureFetchFromAPI } from "@/requests/api"
import { IResponse } from "@/types/Request"
import { REQUESTS } from "@/utils/constants"
import { Random } from "@/utils/helpers"
import { GetServerSideProps } from "next"

interface IHome {
  popularMovies: IResponse
  popularTvSeries: IResponse
}

const Home = ({
  popularMovies,
  popularTvSeries
}: IHome) => {
  return (
    <Container>
      <Banner
        randomItem={Random(popularMovies.results)}
      />
      <CategoryRow
        data={popularMovies.results}
        title="Lo mas popular"
        requestType={REQUESTS.getMovieDetails}
      />
      <CategoryRow
        data={popularTvSeries.results}
        title="Lo mas popular"
        requestType={REQUESTS.getTvSeriesDetails}
      />
    </Container>
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
    console.error('Error fetching data:', error)
    return {
      props: {
        error: 'Failed to fetch data'
      }
    }
  }
}

export default Home
