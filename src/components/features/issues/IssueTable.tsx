import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import { getAllIssues } from "../../../services/apiIssues"
import FullScreen from "../../ui/FullScreen"
import Loader from "../../ui/Loader"
import IssueRow from "./IssueRow"
import { useSearchParams } from "react-router-dom"
import { Enums, Tables } from "../../../utils/database.types"
import { BsArrowUp } from "react-icons/bs"

const Table = styled.div`
    border: 1px solid var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
`

const TableHeader = styled.div`
    display:grid;
    grid-template-columns: 1.4fr .7fr 1.2fr .5fr;
    column-gap:1.5rem;
    align-items: center;
    color:var(--color-grey-900);
    border-bottom: 1px solid var(--color-grey-100) ;
    padding: 1rem 1.4rem;
`

const HeaderItem = styled.span`
    display:flex;
    align-items:center;
    gap:7px;
    cursor: pointer;
    font-size:1.1rem;

    & svg {
        width:.87rem;
        height:.87rem;
    }
`

const tablesHeaders: {
    label: string,
    value: keyof Tables<"issue">
}[] = [
        { label: "Subject", value: "subject" },
        { label: "Status", value: "status" },
        { label: "Created At", value: "created_at" },
    ]

function IssueTable() {
    const [searchParams, setSearchParams] = useSearchParams()
    const statusQuery = searchParams.get("status")
    const status: Enums<"status"> | undefined = statusQuery !== "open" && statusQuery !== "closed" && statusQuery !== "in_progress" ? undefined : statusQuery
    const sortBy: keyof Tables<"issue"> | undefined = tablesHeaders.map((column) => column.value).includes(searchParams.get("sortBy")) ? searchParams.get("sortBy") : undefined

    const { data: issues, isLoading } = useQuery({
        queryKey: ["issues", status, sortBy],
        queryFn: () => getAllIssues(status, sortBy)
    })
    if (isLoading) return (
        <FullScreen>
            <Loader />
        </FullScreen>
    )

    return (
        <Table>
            <TableHeader>
                {tablesHeaders.map((column, index) => (
                    <HeaderItem onClick={() => setSearchParams({ status: status || "", sortBy: column.value || "" })} key={index}>
                        {column.label}
                        {sortBy == column.value && <BsArrowUp />}
                    </HeaderItem>
                ))}
            </TableHeader>
            {issues?.map((issue) => (<IssueRow key={issue.id} issue={issue} />))}
        </Table>
    )
}

export default IssueTable