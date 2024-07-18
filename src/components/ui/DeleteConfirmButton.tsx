import styled from "styled-components"
import Modal from "./Modal"
import Heading from "./Heading"
import { Button } from "./Button"

const DeleteConfirmStyled = styled.div`
    display:flex;
    flex-direction: column;
    gap:2rem;
    width:30rem;
`

const ButtonGroupStyled = styled.div`
    display:flex;
    gap:5px;
`

const Paragraph = styled.p`
    font-size:1.2rem;
    font-weight:500;
    color: var(--color-grey-600);
`

interface Props {
    onClose: () => void,
    clickHandler: () => void
}

function DeleteConfirmButton({ onClose, clickHandler }: Props) {
    return (
        <Modal onClose={onClose}>
            <DeleteConfirmStyled>
                <Heading as="h4">Confirm Deletion</Heading>
                <Paragraph>Are you sure you want to delete this issue? this action cannot be undone.</Paragraph>
                <ButtonGroupStyled>
                    <Button variant="secondary" size="md" onClick={onClose}>Cancel</Button>
                    <Button variant="danger" size="md" onClick={clickHandler}>Delete</Button>
                </ButtonGroupStyled>
            </DeleteConfirmStyled>
        </Modal>
    )
}

export default DeleteConfirmButton