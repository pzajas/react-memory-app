import { useState } from "react"
import arrayShuffle from "array-shuffle"
import styled from "styled-components"

import Imoen from "./assets/Imoen.jpeg"
import Jaheira from "./assets/Jaheira.jpeg"
import Viconia from "./assets/Viconia.jpeg"
import Aerie from "./assets/Aerie.jpeg"
import Card from "./components/Card"

const StyledContainer = styled.div`
  img {
    width: 200px;
    height: 300px;
  }
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const App = () => {
  const [cards, setCards] = useState([])
  const [counter, setCounter] = useState(0)

  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const [cardDisabled, setCardDisabled] = useState(false)

  const imagesArray = [{ image: Aerie }, { image: Imoen }, { image: Jaheira }, { image: Viconia }]

  const shuffleCards = () => {
    const shuffledCards = arrayShuffle([...imagesArray, ...imagesArray]).map(card => ({
      image: <img src={card.image} />,
      id: Math.random(),
      matched: false,
    }))
    setCards(shuffledCards)
    setCounter(0)
  }

  return (
    <StyledContainer>
      <button onClick={shuffleCards}>New Game</button>
      <StyledGrid>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            setCards={setCards}
            firstCard={firstCard}
            secondCard={secondCard}
            setFirstCard={setFirstCard}
            setSecondCard={setSecondCard}
            counter={counter}
            setCounter={setCounter}
            cardDisabled={cardDisabled}
            setCardDisabled={setCardDisabled}
          />
        ))}
      </StyledGrid>

      {counter}
    </StyledContainer>
  )
}

export default App
