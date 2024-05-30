import Card from '@/components/Card/Card'
import Container from '@/components/Container/Container'
import Modal from '@/components/Modal/Modal'
import { insecureFetchFromAPI } from '@/requests/api'
import { IResponse } from '@/types/Request'
import { REQUESTS } from '@/utils/constants'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
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
  data: IResponse
  type: string
}

const Type = ({ data, type }: IType) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedItemId, setSelectedItemId] = useState<number>(1)

  const handleCardClick = (id: number) => {
    setOpenModal(true)
    setSelectedItemId(id)
  }

  return (
    <Container>
      <Title>
        {type}
      </Title>
      <CardContainer>
        {
          data.results.map(item => (
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
        data: getTypeList.data,
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
