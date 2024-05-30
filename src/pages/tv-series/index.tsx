import Banner from '@/components/Banner/Banner'
import CategoryRow from '@/components/CategoryRow/CategoryRow'
import Container from '@/components/Container/Container'
import { insecureFetchFromAPI } from '@/requests/api'
import { IResponse } from '@/types/Request'
import { REQUESTS } from '@/utils/constants'
import { Random } from '@/utils/helpers'
import { GetServerSideProps } from 'next'
import React from 'react'

interface ITVSeries {
  airlingTVSeries: IResponse
  onAirTvSeries: IResponse
  popularTvSeries: IResponse
  topRatedTvSeries: IResponse
}

const TvSeries = ({
  airlingTVSeries, 
  onAirTvSeries,
  popularTvSeries,
  topRatedTvSeries
}: ITVSeries) => {
  return (
    <Container>
      <Banner
        randomItem={Random(popularTvSeries.results)}
      />
      <CategoryRow
        data={airlingTVSeries.results}
        title="Lo mas popular"
        requestType={REQUESTS.getTvSeriesDetails}
      />
      <CategoryRow
        data={onAirTvSeries.results}
        title="Proximas peliculas"
        requestType={REQUESTS.getTvSeriesDetails}
      />
      <CategoryRow
        data={popularTvSeries.results}
        title="top rated peliculas"
        requestType={REQUESTS.getTvSeriesDetails}
      />
      <CategoryRow
        data={topRatedTvSeries.results}
        title="Peliculas en vivo"
        requestType={REQUESTS.getTvSeriesDetails}
      />
    </Container>
  )
}

export default TvSeries

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const airlingTVSeriesData = await insecureFetchFromAPI(REQUESTS.airlingTVSeries)
    const onAirTvSeriesData = await insecureFetchFromAPI(REQUESTS.onAirTvSeries)
    const popularTvSeriesData = await insecureFetchFromAPI(REQUESTS.popularTvSeriesList)
    const topRatedTvSeriesData = await insecureFetchFromAPI(REQUESTS.topRatedTvSeriesList)

    return {
      props: {
        airlingTVSeries: airlingTVSeriesData.data,
        onAirTvSeries: onAirTvSeriesData.data,
        popularTvSeries: popularTvSeriesData.data,
        topRatedTvSeries: topRatedTvSeriesData.data
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
