import { useState } from "react"
import arrayShuffle from "array-shuffle"
import styled from "styled-components"
import kakashi from "./assets/kakashi.jpeg"
import ryuzaki from "./assets/ryuzaki.jpeg"

const StyledContainer = styled.div`
  img {
    width: 300px;
    height: 400px;
  }
`

const App = () => {
  const [cards, setCards] = useState([])
  const [counter, setCounter] = useState(0)

  const imagesArray = [{ image: kakashi }, { image: ryuzaki }]

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

      <div>
        {cards.map(el => (
          <li>{el.image}</li>
        ))}
      </div>
      {counter}
    </StyledContainer>
  )
}

export default App
