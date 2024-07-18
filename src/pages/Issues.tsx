import styled from "styled-components"
import IssueTable from "../components/features/issues/IssueTable"
import Heading from "../components/ui/Heading"
import Row, { RowEnum } from "../components/ui/Row"
import { Button } from "../components/ui/Button"
import { Link } from "react-router-dom"
import { BiPlus } from "react-icons/bi"
import IssuesStatus from "../components/features/issues/IssuesStatus"
import UserAvatar from "../components/features/auth/UserAvatar"

const IssuesStyled = styled.div`
    display:flex;
    flex-direction: column;
    gap:1.5rem;
`

const TableContainer = styled.div`
    position: relative;
    padding:.95rem 1.3rem;
    background-color:var(--color-grey-0);
    border: 1px solid var(--color-grey-50);
    box-shadow:var(--shadow-md);
    border-radius:20px;
`
function Issues() {

    return (
        <IssuesStyled>
            <Row type={RowEnum.horizontal}>
                <Heading as="h1">Issue</Heading>
                <UserAvatar />
            </Row>
            <TableContainer>
                <Row type={RowEnum.horizontal}>
                    <IssuesStatus />
                    <Link to="/issues/new">
                        <Button variant="secondary" size="md">
                            <BiPlus />
                            Add Issue
                        </Button>
                    </Link>
                </Row>
                <IssueTable />
            </TableContainer>
        </IssuesStyled>
    )
}

export default Issues