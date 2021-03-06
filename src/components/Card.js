import { useEffect, useState } from "react"
import Cover from "../assets/Images/covers/Cover.jpeg"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: relative;
`

const StyledCard = styled.div`
  position: absolute;
  width: 22vw;
  height: calc(80vh / 4);
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  transform: ${props => (props.cardActive ? "rotateY(180deg)" : "rotate(0deg)")};
  pointer-events: ${props => (props.cardActive || props.cardDisabled ? "none" : "auto")};
  cursor: ${props => (props.cardActive || props.cardDisabled ? "null" : "pointer")};
`

const StyledCardFront = styled.img`
  position: absolute;
  backface-visibility: hidden;
`

const StyledCardBack = styled.div`
  position: absolute;
  width: 22vw;
  height: calc(80vh / 4);
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
  movesCounter,
  setMovesCounter,
  className,
  cardCompleted,
  setCardCompleted,
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
        setMovesCounter((movesCounter += 1))
        setCardCompleted((cardCompleted += 1))
        setTimeout(() => {
          resetChosenCards()
        }, 800)
      } else if (cardActive && !card.matched) {
        setTimeout(() => {
          setCardActive(false)
          resetChosenCards()
        }, 1500)
        setMovesCounter((movesCounter += 1))
      }
    }
  }, [firstCard, secondCard])

  return (
    <StyledContainer className={className}>
      <StyledCard
        matched={card.matched}
        cardActive={cardActive}
        cardDisabled={cardDisabled}
        onClick={handleChooseCardToFlip}
      >
        <StyledCardFront src={Cover} />
        <StyledCardBack>{card.image}</StyledCardBack>
      </StyledCard>
    </StyledContainer>
  )
}

export default Card
