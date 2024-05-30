import Card from '@/components/Card/Card'
import Container from '@/components/Container/Container'
import Modal from '@/components/Modal/Modal'
import { insecureFetchFromAPI } from '@/requests/api'
import { IResponse, IResponseData } from '@/types/Request'
import { REQUESTS } from '@/utils/constants'
import { GetServerSideProps } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 3rem 0;
  justify-content: space-around;
  padding: 1rem;
`

const Title = styled.h3`
  font-weight: bold;
  font-size: 3rem;
  margin: 2rem 1rem;
  text-transform: capitalize;
  font-variant: small-caps;
`

interface IType {
  initialData: IResponse
  type: string
}

const Type = ({ initialData, type }: IType) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedItemId, setSelectedItemId] = useState<number>(1)
  const [data, setData] = useState<IResponseData[]>(initialData.results)
  const [page, setPage] = useState<number>(1)
  const loaderRef = useRef<HTMLDivElement>(null)

  const handleCardClick = (id: number) => {
    setOpenModal(true)
    setSelectedItemId(id)
  }

  const fetchMoreData = async () => {
    try {
      const nextPage = page + 1
      const params = type
      const getTypeList = await insecureFetchFromAPI(
        `${REQUESTS.baseMovieSearch}${params}?page=${nextPage}`
      );
      const newData = getTypeList.data.results
      setData(prevData => [...prevData, ...newData])
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchMoreData()
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    };
  }, [loaderRef, fetchMoreData])

  return (
    <Container>
      <Title>
        {type}
      </Title>
      <CardContainer>
        {
          data.map(item => (
            <Card
              key={item.id}
              id={item.id}
              imageUrl={item.backdrop_path}
              handleCardClick={handleCardClick}
              alt={item.name || item.original_title}
              title={item.name || item.original_title}
            />
          ))
        }
      </CardContainer>
      <div ref={loaderRef} style={{ height: '20px', background: 'transparent' }} />
      {
        openModal &&
        <Modal
          id={selectedItemId}
          {...{
            setOpenModal,
          }}
          requestUrl={REQUESTS.getMovieDetails}
        />
      }
    </Container>
  )
}

export default Type

export const getServerSideProps: GetServerSideProps = async ({
  query,
}) => {  
  try {
    const params = query.type
    const getTypeList = await insecureFetchFromAPI(`${REQUESTS.baseTVSeriesSearch}${params}`)
    return {
      props: {
        initialData: getTypeList.data,
        type: params
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
