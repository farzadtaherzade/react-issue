import { ReactNode } from "react";
import styled from "styled-components";
import Row, { RowEnum } from "../../ui/Row";
import { BiMessageError, BiMessageRoundedMinus, BiMessageSquareCheck } from "react-icons/bi";

const StatusSummaryStyled = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:1.5rem;
    @media (max-width: 868px) {
        flex-wrap:wrap;
    }
`

const StatusRow = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:1.5rem;
    background-color:var(--color-grey-50);
    border-radius:16px;
    padding:1.2rem 1.8rem;
    color:var(--color-grey-900);
    box-shadow:var(--shadow-md);

    @media (max-width: 1024px) {
        & svg, img{
            display:none;
        }
    }
   
    & svg, img{
        width:3.2rem;
        height:3.2rem;
    }
`
const StatusCount = styled.span`
    font-size:2.8rem;
    text-align:left;
    @media (max-width: 1024px) {
        font-size:2rem;
    }

`

const StatusLabel = styled.span`
    font-size:1.2rem;
    color:var(--color-grey-400);
    @media (max-width: 1024px) {
        font-size:1rem;
    }
`

interface Props {
    open: number;
    in_progress: number;
    closed: number
}

function StatusSummary({ closed, in_progress, open }: Props) {
    const statuses: { label: string, count: number, icon?: ReactNode }[] = [
        { label: "Open", count: open, icon: <BiMessageError /> },
        { label: "In Progress", count: in_progress, icon: <BiMessageRoundedMinus /> },
        { label: "Closed", count: closed, icon: <BiMessageSquareCheck /> },
    ]
    return (
        <StatusSummaryStyled>
            {statuses.map((status, index) =>
                <StatusRow key={index}>
                    {status.icon}
                    <Row type={RowEnum.vertical}>
                        <StatusLabel>{status.label}</StatusLabel>
                        <StatusCount>{status.count}</StatusCount>
                    </Row>
                </StatusRow>)}
        </StatusSummaryStyled>
    )
}

export default StatusSummary