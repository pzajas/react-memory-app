import { useEffect, useState } from "react"
import konoha from "../assets/konoha.jpeg"
import styled from "styled-components"

const StyledCardContainer = styled.div`
  display: flex;
  position: relative;

  div {
  }
`

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  width: 290px;
  height: 350px;
  background-color: ${props => (props.flipped ? "none" : "blue")};
`
const Card = ({ card, setCards, firstCard, secondCard, setFirstCard, setSecondCard, flipped }) => {
  const [clicked, setClicked] = useState(false)

  const handleSetCard = () => {
    firstCard ? setSecondCard(card.image.props.src) : setFirstCard(card.image.props.src)

    setClicked(true)
  }

  const resetCards = () => {
    setFirstCard(null)
    setSecondCard(null)
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard === secondCard) {
        setCards(prevCards => {
          return prevCards.map(card => (firstCard === card.image.props.src ? { ...card, matched: true } : card))
        })
        resetCards()
        console.log("first", firstCard)
        console.log(secondCard)
      } else {
        console.log("nope")
        setClicked(false)
        resetCards()
      }
    }
  }, [firstCard, secondCard])

  return (
    <StyledCardContainer>
      <div>{card.image}</div>
      <StyledDiv flipped={flipped && clicked} />
      <img src={konoha} onClick={handleSetCard} />
    </StyledCardContainer>
  )
}

export default Card
