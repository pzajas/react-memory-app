import styled from "styled-components"

const StyledPrimaryButton = styled.button`
  border: none;
  margin-left: 0.5rem;
  width: 4rem;
  height: 1.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
`

const PrimaryButton = ({ shuffleCards, value, className }) => {
  return (
    <StyledPrimaryButton onClick={shuffleCards} value={value} className={className}>
      {value === 4 ? "Easy" : value === 8 ? "Medium" : "Hard"}
    </StyledPrimaryButton>
  )
}

export default PrimaryButton
