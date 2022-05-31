import { useState } from "react"
import styled from "styled-components"

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.visible ? "green" : "blue")};
  margin-right: 5px;
  cursor: pointer;
`
const Card = ({ id, arr }) => {
  const [visible, setVisible] = useState(false)
  const [completed, setCompleted] = useState(false)

  const revealImage = () => {
    setVisible(true)
  }
  return <StyledBox id={id} visible={visible} onClick={revealImage} />
}

export default Card
