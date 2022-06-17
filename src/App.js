import { useState, useEffect } from "react"
import arrayShuffle from "array-shuffle"
import styled from "styled-components"
import Card from "./components/Card"

const StyledContainer = styled.div`
  /* height: 100vh; */
  width: calc(100vw - 60rem);
  margin: 0 auto 0 auto;
  display: grid;
  place-content: center;
  background-color: #121212;
  border-radius: 10px;

  img {
    width: 130px;
    height: calc(85vh / 4);
    border: 5px #353535 solid;
    border-radius: 10px;
  }
`

const StyledControlPanel = styled.div`
  height: 5vh;
  margin-bottom: 15vh;
  background-color: steelblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0 0 1rem 0; */
  border-radius: 2px;
  z-index: 99999;
`

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 0.2rem;
  place-content: center;
  height: 90vh;
  grid-template-columns: 140px 140px 140px 140px;
  grid-template-rows: calc(90vh / 4) calc(90vh / 4) calc(90vh / 4) calc(90vh / 4) calc(90vh / 4);
`

const App = () => {
  const EASY = 4

  const [cards, setCards] = useState([])
  const [counter, setCounter] = useState(0)
  const [imagesArrayChosenLength, setImagesArrayChosenLength] = useState(9)

  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const [cardDisabled, setCardDisabled] = useState(false)

  function importAll(cards) {
    return cards.keys().map(cards)
  }

  const importedImagesArray = importAll(require.context("./assets/Images/cards", false, /\.(png|jpe?g|svg)$/))

  const shuffleedImportedImagesArray = arrayShuffle(importedImagesArray)

  const shuffleCards = e => {
    const shuffledCards = arrayShuffle([
      ...shuffleedImportedImagesArray.slice(0, e.target.value),
      ...shuffleedImportedImagesArray.slice(0, e.target.value),
    ]).map(card => ({
      image: <img src={card} />,
      id: Math.random(),
      matched: false,
    }))
    setCards(shuffledCards)
    setCounter(0)

    console.log(cards)
  }

  return (
    <StyledContainer>
      <StyledControlPanel>
        <div>
          <button onClick={shuffleCards} value={4}>
            EASY
          </button>
          <button onClick={shuffleCards} value={8}>
            MEDIUM
          </button>
          <button onClick={shuffleCards} value={15}>
            HARD
          </button>
        </div>
        {counter}
      </StyledControlPanel>

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
            imagesArrayChosenLength={imagesArrayChosenLength}
          />
        ))}
      </StyledGrid>
      {/* {counter} */}
    </StyledContainer>
  )
}

export default App
