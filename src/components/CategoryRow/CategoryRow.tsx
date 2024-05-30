import React, { useState } from 'react'
import S from './categoryrow.styles'
import { IResponseData } from '@/types/Request'
import Card from '../Card/Card'
import { REQUESTS } from '@/utils/constants'
import Modal from '../Modal/Modal'

interface ICategoryRow {
  title: string
  data: IResponseData[]
  requestType: any
}

const CategoryRow = ({title, data, requestType}: ICategoryRow) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedItemId, setSelectedItemId] = useState<number>(1)

  const handleCardClick = (id: number) => {
    setOpenModal(true)
    setSelectedItemId(id)
  }

  return (
    <S.Container>
      <S.CategoryInfo>
        <S.CategoryTitle>{title}</S.CategoryTitle>
        <S.CategoryLink>Mostrar mas</S.CategoryLink>
      </S.CategoryInfo>
      <S.CategoryMovies>
        {
          data.map(item => (
            <Card
              key={item.id}
              alt={item.original_title}
              imageUrl={item.backdrop_path}
              title={item.original_title || item.name}
              handleCardClick={handleCardClick}
              id={item.id}
            />
          ))
        }
      </S.CategoryMovies>
      {
        openModal &&
        <Modal
          id={selectedItemId}
          {...{
            setOpenModal,
            requestType
          }}
        />
      }
    </S.Container>
  )
}

export default CategoryRow
