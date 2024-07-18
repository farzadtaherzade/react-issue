import styled from "styled-components"
import { convertTimestamp } from "../../helpers/functions"

export const CreatedAtStyled = styled.div`
    font-size: .8rem;
    font-weight: 700;
    color: var(--color-grey-600);
`
function CreatedAt({ time }: { time: string }) {
    return (
        <CreatedAtStyled>
            {convertTimestamp(time)}
        </CreatedAtStyled>
    )
}

export default CreatedAt