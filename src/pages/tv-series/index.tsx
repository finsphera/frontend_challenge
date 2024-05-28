import Banner from '@/components/Banner/Banner'
import CategoryRow from '@/components/CategoryRow/CategoryRow'
import { insecureFetchFromAPI } from '@/requests/api'
import { ITVSeriesResponse } from '@/types/Movies'
import { REQUESTS } from '@/utils/constants'
import { Random } from '@/utils/helpers'
import { GetServerSideProps } from 'next'
import React from 'react'

interface ITVSeries {
  airlingTVSeries: ITVSeriesResponse
  onAirTvSeries: ITVSeriesResponse
  popularTvSeries: ITVSeriesResponse
  topRatedTvSeries: ITVSeriesResponse
}

const TvSeries = ({
  airlingTVSeries, 
  onAirTvSeries,
  popularTvSeries,
  topRatedTvSeries
}: ITVSeries) => {
  return (
    <main
      style={{
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column'
      }}
    >
      <Banner
        randomMovie={Random(topRatedTvSeries.results)}
      />
      <CategoryRow
        data={airlingTVSeries.results}
        title="Lo mas popular"
      />
      <CategoryRow
        data={onAirTvSeries.results}
        title="Proximas peliculas"
      />
      <CategoryRow
        data={popularTvSeries.results}
        title="top rated peliculas"
      />
      <CategoryRow
        data={topRatedTvSeries.results}
        title="Peliculas en vivo"
      />
    </main>
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