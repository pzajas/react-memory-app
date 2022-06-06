import { useEffect } from "react"
import konoha from "../assets/konoha.jpeg"

const Card = ({ card, firstCard, secondCard, setFirstCard, setSecondCard }) => {
  const show = () => {
    firstCard ? setSecondCard(card.image.props.src) : setFirstCard(card.image.props.src)
  }

  const resetCards = () => {
    setFirstCard(null)
    setSecondCard(null)
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard === secondCard) {
        console.log("okey")
        resetCards()
      } else {
        console.log("nope")
        resetCards()
      }
    }
  }, [firstCard, secondCard])

  return (
    <div>
      {card.image} <img src={konoha} onClick={show} />
    </div>
  )
}

export default Card
