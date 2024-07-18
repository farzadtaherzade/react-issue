import styled from "styled-components"
import Row, { RowEnum } from "../../ui/Row"
import Heading from "../../ui/Heading"
import { Button } from "../../ui/Button"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getLatestIssue } from "../../../services/apiDashboard"
import FullScreen from "../../ui/FullScreen"
import Loader from "../../ui/Loader"
import { Status, Subject } from "../issues/IssueRow"
import { capitalizeFirstLetter } from "../../../helpers/functions"
import UserAvatar from "../auth/UserAvatar"
import CreatedAt from "../../ui/CreatedAt"
import { useUser } from "../../../hooks/useUser"

const IssueLatestStyled = styled.div`
    width:100%;
    background-color:var(--color-grey-50);
    border-radius: 8px;
    padding:1.2rem 2rem;
    color:var(--color-grey-900);
    box-shadow:var(--shadow-md);
    display:flex;
    gap:1.25rem;
    flex-direction:column;
`

const IssueRow = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: auto 2fr auto;
    align-items:center;
    grid-gap:2rem;
    color:var(--color-grey-900);
    background-color: var(--color-grey-50);
    box-shadow:var(--shadow-sm);
    padding:.2rem 1.5rem;
    border-radius:8px;

    &:hover {
        transform: scale(1.04);
        transition: .3s all ease-in-out;
    }
`

const IssueTimeStatus = styled(Row)`
    align-items: center;
`

const UserFullname = styled.span`
    font-size:.9rem;
    font-weight:400;
    color:var(--color-grey-400);
`

function IssueLatest() {
    const { user } = useUser()
    const { data, isLoading } = useQuery({
        queryKey: ["latestIssue"],
        queryFn: getLatestIssue
    })
    if (isLoading) return <FullScreen>
        <Loader />
    </FullScreen>
    return (
        <IssueLatestStyled>
            <Row type={RowEnum.horizontal}>
                <Heading as="h4">Latest Issue</Heading>
                <Link to="/issues">
                    <Button variant="secondary" size="sm">See All</Button>
                </Link>
            </Row>
            <>
                {data?.map(issue => (
                    <IssueRow>
                        <UserAvatar name={false} />
                        <Row type={RowEnum.vertical}>
                            <Subject>
                                <Link to={`/issues/${issue.id}`}>{issue.subject.slice(0, 17)}{issue.subject.length > 17 && "..."}</Link>
                            </Subject>
                            <UserFullname>{user?.user_metadata.fullName}</UserFullname>
                        </Row>
                        <IssueTimeStatus type={RowEnum.vertical}>
                            <CreatedAt time={issue.created_at} />
                            <Status $status={issue.status!} $size="sm"> {capitalizeFirstLetter(issue.status!)} </Status>
                        </IssueTimeStatus>
                    </IssueRow>
                ))}
            </>
        </IssueLatestStyled>
    )
}

export default IssueLatest