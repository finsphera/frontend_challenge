import Banner from '@/components/Banner/Banner'
import CategoryRow from '@/components/CategoryRow/CategoryRow'
import Container from '@/components/Container/Container'
import Spinner from '@/components/Spinner/Spinner'
import { insecureFetchFromAPI } from '@/requests/api'
import { IResponse } from '@/types/Request'
import { REQUESTS } from '@/utils/constants'
import { Random } from '@/utils/helpers'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

interface ITVSeries {
  airlingTVSeries: IResponse
  onAirTvSeries: IResponse
  popularTvSeries: IResponse
  topRatedTvSeries: IResponse
  pageName: string
}

const TvSeries = ({
  airlingTVSeries, 
  onAirTvSeries,
  popularTvSeries,
  topRatedTvSeries,
  pageName
}: ITVSeries) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (
      airlingTVSeries &&
      onAirTvSeries &&
      popularTvSeries &&
      popularTvSeries
    ) {
      setIsLoading(false)
    }
  }, [airlingTVSeries, popularTvSeries, onAirTvSeries, popularTvSeries])

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container>
      <Banner
        randomItem={Random(popularTvSeries.results)}
      />
      <CategoryRow
        data={airlingTVSeries.results}
        title="Airling today"
        requestUrl={REQUESTS.getTvSeriesDetails}
        type="airing_today"
        pageName={pageName}
      />
      <CategoryRow
        data={onAirTvSeries.results}
        title="On the air"
        requestUrl={REQUESTS.getTvSeriesDetails}
        type="on_the_air"
        pageName={pageName}
      />
      <CategoryRow
        data={popularTvSeries.results}
        title="Popular series"
        requestUrl={REQUESTS.getTvSeriesDetails}
        type="popular"
        pageName={pageName}
      />
      <CategoryRow
        data={topRatedTvSeries.results}
        title="Top rated series"
        requestUrl={REQUESTS.getTvSeriesDetails}
        type="top_rated"
        pageName={pageName}
      />
    </Container>
  )
}

export default TvSeries

export const getServerSideProps: GetServerSideProps = async ({resolvedUrl}) => {
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
        topRatedTvSeries: topRatedTvSeriesData.data,
        pageName: resolvedUrl
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
