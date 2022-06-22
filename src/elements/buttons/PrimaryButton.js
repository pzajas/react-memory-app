import styled from "styled-components"

const StyledPrimaryButton = styled.button`
  border: none;
  margin-left: 0.5rem;
  width: 4rem;
  height: 1rem;
  border-radius: 0.1rem;
  cursor: pointer;
`

const PrimaryButton = ({ handleShuffleCards, cardsNumber, className }) => {
  return (
    <StyledPrimaryButton
      onClick={() => handleShuffleCards(cardsNumber)}
      cardsNumber={cardsNumber}
      className={className}
    >
      {cardsNumber === 4 ? "Easy" : cardsNumber === 6 ? "Medium" : "Hard"}
    </StyledPrimaryButton>
  )
}

export default PrimaryButton
