import styled from "styled-components"
import IssueForm from "../components/features/issues/IssueForm"

const NewStyled = styled.div`
    max-width:720px;
    margin: 0 auto;
`



function NewIssue() {
    return (
        <NewStyled>
            <IssueForm text="Create Issue" />
        </NewStyled>
    )
}

export default NewIssue