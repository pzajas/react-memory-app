import Card from "./components/Card"
import styled from "styled-components"
import { useState } from "react"

const StyledConatiner = styled.div`
  display: flex;

  li {
    list-style: none;
    margin-right: 5px;
    cursor: pointer;
  }
`

const App = () => {
  const picturesArray = Array.from({ length: 4 }, (_, index) => <Card id={index < 2 ? index : index - 2} />)

  return (
    <StyledConatiner>
      {picturesArray.map(el => (
        <li>{el}</li>
      ))}
    </StyledConatiner>
  )
}

export default App
