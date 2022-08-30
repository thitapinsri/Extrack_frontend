import './CardList.css'
import Card from '../Card/Card';

export default function CardList({cards, onRemove, loading}) {
  if (loading) return <h2>Loading..</h2>
  
  return (
    <div className='cardlist'>
        {
            cards.map((card, key) => {
                return <Card
                  card={card}
                  key={key}
                  onRemove={onRemove}
                  />
            })
        }
    </div>
  )
}
