import './Card.css'
import { useNavigate } from 'react-router';
import remove from '/assets/remove.png'
import edit from '/assets/edit.png'


const Card = ({ card, onRemove }) => {
    const navigate = useNavigate()

    const removeCard = () => {
        onRemove(card)
    }

    const editCard = () => {
        navigate(`/user/edit/${card._id}`)
    }


    return (
        <div className='card' key={card._id}>
            <div className='card-content'>
                <div className='card-head'>
                    <p>{card.date.split('T')[0]}</p>
                    <div className='card-button'>
                        <a onClick={removeCard}>
                            <img src={remove} className="remove" alt='remove' />
                        </a>
                        <a onClick={editCard}>
                            <img src={edit} className="edit" alt='edit' />
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-detail">
                        <p>type: {card.activity_type}</p>
                        <p>activity: {card.activity_name}</p>
                        <p>duration: {card.duration}</p>
                    </div>
                    <div className="card-text">
                        <p>{card.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card