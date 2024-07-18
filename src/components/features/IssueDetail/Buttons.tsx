import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../../ui/Button";
import styled from "styled-components";
import { deleteIssue } from "../../../services/apiIssues";
import MiniLoader from "../../ui/MiniLoader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import DeleteConfirmButton from "../../ui/DeleteConfirmButton";
import { useState } from "react";

interface ButtonProps {
  issueId: number
  isEditing: boolean,
  setIsEditing: () => void,
}

const ButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  flex-basis: 20%;
`;

const ButtonStyled = styled(Button)`
  width:100%;
`

function Buttons({ issueId, isEditing, setIsEditing }: ButtonProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { isLoading, mutate } = useMutation({
    mutationFn: (id: number) => deleteIssue(id),
    onSuccess: () => {
      toast.success(`The Issue with id ${issueId} deleted Successfully`, { position: 'top-right' })
      queryClient.invalidateQueries({
        queryKey: ["issues"]
      })
      navigate('/issues')
    }
  })

  const clickHandler = () => {
    setIsOpen(!isOpen)
    mutate(issueId)
  }

  return (
    <ButtonContainerStyled>
      <ButtonStyled size="md" variant="primary" onClick={setIsEditing}>
        {isEditing ? <IoClose /> : <BiEdit />}
        {isEditing ? "Close editing" : "Edit issue"}
      </ButtonStyled>
      <ButtonStyled size="md" variant="grey" disabled={isLoading} onClick={() => setIsOpen(!isOpen)}>
        {isLoading && <MiniLoader />}
        <span>Delete Issue</span>
      </ButtonStyled>

      {isOpen && <DeleteConfirmButton clickHandler={clickHandler} onClose={() => setIsOpen(!isOpen)} />}

    </ButtonContainerStyled>
  );
}

export default Buttons;
