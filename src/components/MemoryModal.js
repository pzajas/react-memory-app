import { useState } from "react"
import Modal from "react-modal"

const customStyles = {
  content: {
    width: "calc(100vw - 20rem)",
    height: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "steelblue",
    display: "grid",
    placeContent: "center",
  },
}

const MemoryModal = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(true)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button>Test Modal</button>
      </Modal>
    </div>
  )
}

export default MemoryModal
