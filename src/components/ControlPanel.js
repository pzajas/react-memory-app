import styled from "styled-components"
import PrimaryButton from "../elements/buttons/PrimaryButton"

const StyledControlPanel = styled.div`
  height: 5vh;
  margin-bottom: 15vh;
  background-color: #353535;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  z-index: 99999;
  align-items: center;
`

const StyledButtonPanel = styled.div`
  display: flex;
  align-items: center;
`

const StyledControlCounter = styled.div`
  margin-right: 0.5rem;
  background-color: white;
  border-radius: 0.1rem;
  width: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ControlPanel = ({ handleShuffleCards, movesCounter }) => {
  const EASY = "EASY"
  const MEDIUM = "MEDIUM"
  const HARD = "HARD"

  return (
    <StyledControlPanel>
      <StyledButtonPanel>
        <PrimaryButton handleShuffleCards={handleShuffleCards} cardsNumber={4} />
        <PrimaryButton handleShuffleCards={handleShuffleCards} cardsNumber={6} />
        <PrimaryButton handleShuffleCards={handleShuffleCards} cardsNumber={8} />
      </StyledButtonPanel>

      <StyledControlCounter>{movesCounter}</StyledControlCounter>
    </StyledControlPanel>
  )
}

export default ControlPanel
