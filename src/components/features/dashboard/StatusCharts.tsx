import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components"

const StatusChartsStyled = styled.div`
    width:100%;
    background-color:var(--color-grey-50);
    border-radius: 8px;
    padding:1.2rem 0;
    color:var(--color-grey-900);
    box-shadow:var(--shadow-md);
    display:flex;
    gap:1rem;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`

const Title = styled.span`
    font-size:1.2rem;
    color:var(--color-grey-900);
    margin-left:2.1rem;
`

interface Props {
    open: number;
    in_progress: number;
    closed: number
}

function StatusCharts({ closed, in_progress, open }: Props) {
    const data: { name: string, value: number, color: string }[] = [
        { name: "Open", value: open, color: "#4318FE" },
        { name: "On Progress", value: in_progress, color: "#FFC655" },
        { name: "Closed", value: closed, color: "#04CD99" },
    ]

    return (
        <StatusChartsStyled>
            <Title>Summary</Title>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <Tooltip />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="value" domain={[0, closed + in_progress + open]} />
                    <Bar dataKey="value">
                        {
                            data.map((entry) => (
                                <Cell key={`cell-${entry.value}`} fill={entry.color} />
                            ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </StatusChartsStyled >
    )
}

export default StatusCharts