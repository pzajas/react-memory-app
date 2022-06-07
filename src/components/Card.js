import { useEffect } from "react"
import konoha from "../assets/konoha.jpeg"

const Card = ({ card, setCards, firstCard, secondCard, setFirstCard, setSecondCard }) => {
  const handleSetCard = () => {
    firstCard ? setSecondCard(card.image.props.src) : setFirstCard(card.image.props.src)
  }

  const resetCards = () => {
    setFirstCard(null)
    setSecondCard(null)
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard === secondCard) {
        setCards(prevCards => {
          return prevCards.map(card => (firstCard === card.image.props.src ? { ...card, matched: true } : { ...card }))
        })
        resetCards()
      } else {
        console.log("nope")
        resetCards()
      }
    }
  }, [firstCard, secondCard])

  return (
    <div>
      {card.matched ? (
        <div>{card.image}</div>
      ) : (
        <div>
          {card.image} <img src={konoha} onClick={handleSetCard} />
        </div>
      )}
      {/* <div>
        {card.image} <img src={konoha} onClick={handleSetCard} />
      </div> */}
    </div>
  )
}

export default Card
