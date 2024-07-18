import styled, { css } from "styled-components"
import { Enums, Tables } from "../../../utils/database.types"
import { capitalizeFirstLetter } from "../../../helpers/functions"
import { Button } from "../../ui/Button"
import { Link } from "react-router-dom"
import CreatedAt from "../../ui/CreatedAt"

export const TableRow = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 1.4fr .7fr 1.2fr .5fr;
    column-gap:1.5rem;
    align-items: center;

    background-color: var(--color-grey-0);
    padding: 1rem 1.4rem;
    border-radius:6px;

`

export const Subject = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-grey-600);
`
export const Status = styled.div<{ $status: Enums<"status">, $size?: string }>`
    width:fit-content;
    font-size: .9rem;
    font-weight: 500;
    text-align:center;
    padding:.5rem 1.2rem;;
    border-radius:10px;

    ${(props) => props.$status === "open" &&
        css`
            background-color: var(--color-green-100);
            color: var(--color-green-700);
        `
    }

    ${(props) => props.$status === "closed" &&
        css`
            background-color: var(--color-red-100);
            color: var(--color-red-700);
        `
    }

    ${(props) => props.$status === "in_progress" &&
        css`
            background-color: var(--color-yellow-100);
            color: var(--color-yellow-700);
        `
    }

    ${(props) => props.$size === "sm" &&
        css`
            font-size: .6rem;
            padding:.3rem .8rem;;
            border-radius:4px;
        `
    }
`

function IssueRow({ issue }: { issue: Tables<"issue"> }) {
    return (
        <TableRow>
            <Subject> {issue.subject} </Subject>
            <Status $status={issue.status!}> {capitalizeFirstLetter(issue.status!)} </Status>
            <CreatedAt time={issue.created_at} />
            <Link to={`/issues/${issue.id}`}>
                <Button size="sm" variant="secondary">View Detail</Button>
            </Link>
        </TableRow>
    )
}

export default IssueRow