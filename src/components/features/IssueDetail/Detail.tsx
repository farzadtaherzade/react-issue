import styled from 'styled-components'
import { Tables } from '../../../utils/database.types'
import Row, { RowEnum } from '../../ui/Row';
import Heading from '../../ui/Heading';
import { Status } from '../issues/IssueRow';
import CreatedAt from '../../ui/CreatedAt';
import ReactMarkdown from 'react-markdown'
import UserAvatar from '../auth/UserAvatar';

const DetailStyled = styled.div`
    width:100%;
    background-color: var(--color-grey-0);
    display: flex;
    flex-direction:column;
    gap:1.4rem;
    border-radius:10px;
    padding:1rem;

    box-shadow:var(--shadow-md);
    flex-basis: 80%;
`;

const ReactMarkdownStyled = styled(ReactMarkdown)`
    color: var(--color-grey-900);
`

function Detail({ issue }: { issue: Tables<"issue"> }) {
    return (
        <DetailStyled>
            <Row type={RowEnum.horizontal}>
                <Heading as="h3">{issue.subject}</Heading>
                <Status $status={issue.status!}>{issue.status}</Status>
            </Row>
            <ReactMarkdownStyled>{issue.message}</ReactMarkdownStyled>
            <Row type={RowEnum.horizontal}>
                <UserAvatar />
                <CreatedAt time={issue.created_at} />
            </Row>
        </DetailStyled>
    )
}

export default Detail