import { useEffect, useState } from "react"
import konoha from "../assets/konoha.jpeg"
import styled from "styled-components"

const StyledCardContainer = styled.div`
  position: relative;
`

// const StyledGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr;
// `

const StyledContainer = styled.div`
  position: relative;
  width: 250px;
  height: 320px;
`

const StyledCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  transform: ${props => (props.clicked ? "rotateY(180deg)" : "rotate(0deg)")};
`

const StyledFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #ffc728;
  color: #333;
  cursor: pointer;
`

const StyledBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: grey;
  color: #333;
  transform: rotateY(180deg);
`

// const StyledDiv = styled.div`
//   position: absolute;
//   backface-visibility: hidden;
//   top: 0;
//   background-color: royalblue;
//   width: 300px;
//   height: 400px;
//   transition: all 2s ease;
//   transform: ${props => (props.clicked ? "rotateY(90deg)" : "rotate(0deg)")};
//   transform-style: preserve-3d;
//   pointer-events: ${props => (props.clicked ? "none" : "auto")};
//   cursor: pointer;
// `
const Card = ({ card, setCards, firstCard, secondCard, setFirstCard, setSecondCard, counter, setCounter }) => {
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
      if (firstCard === secondCard && clicked) {
        setCards(prevCards => {
          return prevCards.map(card => (firstCard === card.image.props.src ? { ...card, matched: true } : card))
        })
        resetCards()
        setCounter((counter += 1))
      } else if (clicked && !card.matched) {
        setTimeout(() => {
          setClicked(false)
        }, 2500)
        setCounter((counter += 1))
        resetCards()
      }
    }
  }, [firstCard, secondCard])

  return (
    <StyledCardContainer>
      {/* <StyledGrid>
        <StyledImage>{card.image}</StyledImage>
        <StyledDiv matched={card.matched} clicked={clicked} onClick={handleSetCard} />
        <StyledDiv matched={card.matched} clicked={clicked} onClick={handleSetCard} />
      </StyledGrid> */}

      <StyledContainer>
        <StyledCard matched={card.matched} clicked={clicked} onClick={handleSetCard}>
          <StyledFront>FRONT</StyledFront>
          <StyledBack>{card.image}</StyledBack>
        </StyledCard>
      </StyledContainer>
    </StyledCardContainer>
  )
}

export default Card
