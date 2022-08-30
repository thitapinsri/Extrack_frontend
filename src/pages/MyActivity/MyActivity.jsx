import './MyActivity.css'
import { useState } from 'react'
import CartList from '../../components/CartList/CardList'
import { useEffect } from 'react'
import ButtonAddAct from '../../components/ButtonAddAct/ButtonAddAct'
import NavBar from '../../components/NavBar/NavBar'

import api from '/configs/api'
import Pagination from '../../components/Pagination/Pagination'


const MyActivity = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage] = useState(5)
  
  const getData = async () => {
    setLoading(true)
    const response = await api.get('user/activities')
    setCards(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  // get current cards
  const endIndex = currentPage * cardPerPage
  const startIndex = endIndex - cardPerPage
  const currentCards = cards.slice(startIndex, endIndex)

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const removeCard = (selectedCard) => {
    api.delete(`user/activities/${selectedCard._id}`)
      .then(() => {
        const newCards = cards.filter(card => {
          return card._id != selectedCard._id
        })
        setCards(newCards)
      })
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="my-activity">
        {/* <div className='sidebar'>
        <h1>sidebar</h1>
      </div> */}
        <div className='container'>
          <h1>My Activity</h1>
          <ButtonAddAct />
        </div>
        <Pagination
          cardPerPage={cardPerPage}
          totalCards={cards.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <CartList
          cards={currentCards}
          onRemove={removeCard}
          loading={loading}
        />
      </div>
    </>
  )
}

export default MyActivity