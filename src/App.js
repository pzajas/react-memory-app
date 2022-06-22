import { useState, useEffect } from "react"
import arrayShuffle from "array-shuffle"
import styled from "styled-components"
import Card from "./components/Card"
import ControlPanel from "./components/ControlPanel"
import MemoryModal from "./components/MemoryModal"

const StyledContainer = styled.div`
  padding-top: 0.5rem;
  margin: 0 auto 0 auto;
  display: grid;
  place-content: center;
  background-color: #121212;
  border-radius: 10px;

  img {
    width: 22vw;
    height: calc(80vh / 4);
    border: 2px #353535 solid;
    border-radius: 10px;
  }
`

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  place-content: center;
  height: 79vh;
  grid-template-columns: 24vw 24vw 24vw 24vw;
  grid-template-rows: calc(83vh / 4) calc(83vh / 4) calc(83vh / 4) calc(83vh / 4) calc(83vh / 4);
`

const StyledMemoryModal = styled(MemoryModal)`
  width: 100%;
  height: 40vh;
  background-color: rgba(255, 255, 255);
`

const App = () => {
  const [cards, setCards] = useState([])
  const [movesCounter, setMovesCounter] = useState(0)

  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const [cardDisabled, setCardDisabled] = useState(false)
  const [cardCompleted, setCardCompleted] = useState(0)

  const [modalIsOpen, setIsOpen] = useState(false)

  const handleImportAllImagesFromAssets = cards => {
    return cards.keys().map(cards)
  }

  const importedImagesArray = handleImportAllImagesFromAssets(
    require.context("./assets/Images/cards", false, /\.(png|jpe?g|svg)$/)
  )

  const shuffleedImportedImagesArray = arrayShuffle(importedImagesArray)

  const handleShuffleCards = difficultyLevel => {
    const shuffledCards = arrayShuffle([
      ...shuffleedImportedImagesArray.slice(0, difficultyLevel),
      ...shuffleedImportedImagesArray.slice(0, difficultyLevel),
    ]).map(card => ({
      image: <img src={card} />,
      id: Math.random(),
      matched: false,
    }))
    setIsOpen(false)
    setCards(shuffledCards)
    setMovesCounter(0)
    setCardCompleted(0)
  }

  useEffect(() => {
    if (cards.length !== 0 && cardCompleted === cards.length / 2) {
      setTimeout(() => {
        cards.every(el => (el.matched === true ? setIsOpen(true) : setIsOpen(false)))
      }, 1500)
    }
  }, [cards])

  return (
    <StyledContainer>
      <ControlPanel handleShuffleCards={handleShuffleCards} movesCounter={movesCounter} />
      <StyledMemoryModal
        setCards={setCards}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        movesCounter={movesCounter}
      />
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
            movesCounter={movesCounter}
            setMovesCounter={setMovesCounter}
            cardCompleted={cardCompleted}
            setCardCompleted={setCardCompleted}
            cardDisabled={cardDisabled}
            setCardDisabled={setCardDisabled}
          />
        ))}
      </StyledGrid>
    </StyledContainer>
  )
}

export default App
