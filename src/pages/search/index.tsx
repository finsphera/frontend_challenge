import React, { useMemo, useState } from 'react'
import { GetServerSideProps } from 'next'
import { IResponse, IResponseData } from '@/types/Request'
import { REQUESTS } from '@/utils/constants'
import { insecureFetchFromAPI } from '@/requests/api'
import Container from '@/components/Container/Container'
import Card from '@/components/Card/Card'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 3rem 0;
  justify-content: space-around;
  padding: 1rem;
`

const Form = styled.form`
  align-items: center;
  display: flex;
  margin: 2rem 1rem 2rem 1rem;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 3rem;
  margin-right: 1rem;
`

const Input = styled.input`
  background: transparent;
  border: 1px solid #fff;
  outline: 0;
  padding: .75rem;
  width: 250px;
`

interface ISearch {
  allMediaTypes: IResponse
}

const Search = ({
  allMediaTypes
}: ISearch) => {
  const [input, setInput] = useState<string>('')

  const list = useMemo(() => {
    return allMediaTypes.results.filter((e: IResponseData) => {
      if ((e.name || e.original_title).toString().toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        return e.name || e.original_title
      }
    })
  }, [input, allMediaTypes])

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Label>Busqueda</Label>
        <Input
          placeholder='Buscar...'
          onChange={({ target }) => setInput(target.value)}
          type='text'
        />
      </Form>
      <CardContainer>
        {
          list.map(item => (
            <Card
              key={item.id}
              alt={item.original_title || item.name}
              imageUrl={item.backdrop_path}
              title={item.original_title || item.name}
              handleCardClick={() => {}}
            />
          ))
        }
      </CardContainer>
    </Container>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const allMediaTypesList = await insecureFetchFromAPI(REQUESTS.allMediaTypes)

    return {
      props: {
        allMediaTypes: allMediaTypesList.data
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
