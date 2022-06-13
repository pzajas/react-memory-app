import { useEffect, useState } from "react"
import konoha from "../assets/konoha.jpeg"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
`

const StyledCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  transform: ${props => (props.cardActive ? "rotateY(180deg)" : "rotate(0deg)")};
  pointer-events: ${props => (props.cardActive || props.cardDisabled ? "none" : "auto")};
`

const StyledCardFront = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  cursor: pointer;
`

const StyledCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

const Card = ({
  card,
  cardDisabled,
  setCardDisabled,
  setCards,
  firstCard,
  secondCard,
  setFirstCard,
  setSecondCard,
  counter,
  setCounter,
}) => {
  const [cardActive, setCardActive] = useState(false)

  const handleChooseCardToFlip = () => {
    firstCard ? setSecondCard(card.image.props.src) : setFirstCard(card.image.props.src)

    setCardActive(true)
  }

  const resetChosenCards = () => {
    setFirstCard(null)
    setSecondCard(null)

    setCardDisabled(false)
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setCardDisabled(true)
      if (firstCard === secondCard && cardActive) {
        setCards(prevCards => {
          return prevCards.map(card => (firstCard === card.image.props.src ? { ...card, matched: true } : card))
        })
        setCounter((counter += 1))

        setTimeout(() => {
          resetChosenCards()
        }, 800)
      } else if (cardActive && !card.matched) {
        setTimeout(() => {
          setCardActive(false)
          resetChosenCards()
        }, 1500)
        setCounter((counter += 1))
      }
    }
  }, [firstCard, secondCard])

  return (
    <StyledContainer>
      <StyledCard
        matched={card.matched}
        cardActive={cardActive}
        cardDisabled={cardDisabled}
        onClick={handleChooseCardToFlip}
      >
        <StyledCardFront src={konoha} />
        <StyledCardBack>{card.image}</StyledCardBack>
      </StyledCard>
    </StyledContainer>
  )
}

export default Card
