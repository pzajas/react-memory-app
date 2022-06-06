import { useState } from "react"
import arrayShuffle from "array-shuffle"
import styled from "styled-components"
import kakashi from "./assets/kakashi.jpeg"

import note from "./assets/note.jpeg"
import ryuzaki from "./assets/ryuzaki.jpeg"
import Card from "./components/Card"

const StyledContainer = styled.div`
  img {
    width: 300px;
    height: 400px;
  }
`

const App = () => {
  const [cards, setCards] = useState([])
  const [counter, setCounter] = useState(0)

  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const imagesArray = [{ image: kakashi }, { image: note }, { image: ryuzaki }]

  const shuffleCards = () => {
    const shuffledCards = arrayShuffle([...imagesArray, ...imagesArray]).map(card => ({
      image: <img src={card.image} />,
      id: Math.random(),
    }))
    setCards(shuffledCards)
    setCounter(0)
  }

  return (
    <StyledContainer>
      <button onClick={shuffleCards}>New Game</button>
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          firstCard={firstCard}
          secondCard={secondCard}
          setFirstCard={setFirstCard}
          setSecondCard={setSecondCard}
        />
      ))}
      {counter}
    </StyledContainer>
  )
}

export default App
