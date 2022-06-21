import Modal from "react-modal"
import styled from "styled-components"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "grid",
    placeContent: "center",
  },
}

const MemoryModalConatiner = styled.div`
  height: 500px;
  width: 300px;
`

const MemoryModal = ({ setIsOpen, modalIsOpen, className, movesCounter }) => {
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <MemoryModalConatiner className={className}>
          <p>{`Congratulations! You have beaten the game in ${movesCounter} moves!`}</p>
        </MemoryModalConatiner>
      </Modal>
    </div>
  )
}

export default MemoryModal
