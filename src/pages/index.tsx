import { useState } from "react";
import { CustomModal } from "../CustomModal";
import { Button, MainContainer } from "./styles";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  function handleCloseModal() {
    setIsOpen(false)
  }

  function handleOpenModal() {
    setIsOpen(true)
  }

  return (
    <MainContainer>
      <CustomModal onRequestClose={handleCloseModal} isShowing={isOpen} title="Modal">
        {/* children here */}
      </CustomModal>
      <Button onClick={handleOpenModal}>Open Modal</Button>
    </MainContainer>
  )
}