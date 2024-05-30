import React, { useEffect, useMemo, useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import { IResponse, IResponseData } from '@/types/Request'
import { REQUESTS } from '@/utils/constants'
import { insecureFetchFromAPI } from '@/requests/api'
import Container from '@/components/Container/Container'
import Card from '@/components/Card/Card'
import styled from 'styled-components'
import Modal from '@/components/Modal/Modal'

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
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedItemId, setSelectedItemId] = useState<number>(1)
  const [data, setData] = useState<IResponseData[]>(allMediaTypes.results)
  const [page, setPage] = useState<number>(1)
  const loaderRef = useRef<HTMLDivElement>(null)

  const handleCardClick = (id: number) => {
    setOpenModal(true)
    setSelectedItemId(id)
  }

  const fetchMoreData = async () => {
    try {
      const nextPage = page + 1
      const allMediaTypesList = await insecureFetchFromAPI(`${REQUESTS.popularMovieList}?page=${nextPage}`)
      const newData = allMediaTypesList.data.results
      setData(prevData => [...prevData, ...newData])
      setPage(nextPage)
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

  const list = useMemo(() => {
    return data.filter((e: IResponseData) => {
      if ((e.name || e.original_title).toString().toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        return e.name || e.original_title
      }
    })
  }, [input, data])

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
              handleCardClick={handleCardClick}
              id={item.id}
            />
          ))
        }
      </CardContainer>
      <div ref={loaderRef} style={{ height: '20px', background: 'transparent' }} />
      {openModal && (
        <Modal
          id={selectedItemId}
          setOpenModal={setOpenModal}
          requestUrl={REQUESTS.getMovieDetails}
        />
      )}
    </Container>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const allMediaTypesList = await insecureFetchFromAPI(REQUESTS.popularMovieList)

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
