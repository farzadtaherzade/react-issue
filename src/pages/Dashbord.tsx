import { useQuery } from "@tanstack/react-query"
import Heading from "../components/ui/Heading"
import Row, { RowEnum } from "../components/ui/Row"
import { getStatuses } from "../services/apiDashboard"
import FullScreen from "../components/ui/FullScreen"
import Loader from "../components/ui/Loader"
import StatusSummary from "../components/features/dashboard/StatusSummary"
import UserAvatar from "../components/features/auth/UserAvatar"
import styled from "styled-components"
import StatusCharts from "../components/features/dashboard/StatusCharts"
import IssueLatest from "../components/features/dashboard/IssueLatest"

const DashbordStyled = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
`

const DashbordSummaryGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:33rem;
    grid-gap: 1.5rem;

    @media (max-width: 1336px) {
        grid-template-columns: 1fr;
    }
`

function Dashbord() {
    const { data, isLoading } = useQuery({
        queryKey: ["statusCounts"],
        queryFn: getStatuses
    })
    if (isLoading) return <FullScreen>
        <Loader />
    </FullScreen>
    const { closedCount, inProgressCount, openCount } = data!
    return (
        <DashbordStyled>
            <Row type={RowEnum.horizontal}>
                <Heading as="h1">Dashboard</Heading>
                <UserAvatar />
            </Row>
            <StatusSummary open={openCount!} closed={closedCount!} in_progress={inProgressCount!} />
            <DashbordSummaryGrid>
                <StatusCharts open={openCount!} closed={closedCount!} in_progress={inProgressCount!} />
                <IssueLatest />
            </DashbordSummaryGrid>
        </DashbordStyled>
    )
}

export default Dashbord