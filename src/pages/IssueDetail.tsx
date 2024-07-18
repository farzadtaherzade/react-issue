import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/features/IssueDetail/Detail";
import { getOneIssue } from "../services/apiIssues";
import FullScreen from "../components/ui/FullScreen";
import Loader from "../components/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Buttons from "../components/features/IssueDetail/Buttons";
import { useState } from "react";
import IssueForm from "../components/features/issues/IssueForm";
import Row, { RowEnum } from "../components/ui/Row";
import Heading from "../components/ui/Heading";
import UserAvatar from "../components/features/auth/UserAvatar";

const DetailRow = styled.div`
  margin-top:2rem;
  display:flex;
  flex-direction: row;
  gap:1.5rem;
`

const LeftContainer = styled.div`
    flex-basis: 80%;
`

function IssueDetail() {
  const { issueId } = useParams();
  const { data: issue, isLoading } = useQuery(["todo", Number(issueId)], () => getOneIssue(Number(issueId)))
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState<boolean>(false)

  if (isLoading) return (
    <FullScreen>
      <Loader />
    </FullScreen>
  )

  if (!issue) {
    navigate('/issues')
  }

  return (
    <>
      <Row type={RowEnum.horizontal}>
        <Heading as="h1">Issue</Heading>
        <UserAvatar />
      </Row>
      <DetailRow>
        {isEditing ?
          (<LeftContainer>
            <IssueForm issue={issue} text="Updating Issue" setIsEditing={() => setIsEditing(!isEditing)} />
          </LeftContainer>)
          : <Detail issue={issue!} />}
        <Buttons issueId={issue!.id} setIsEditing={() => setIsEditing(!isEditing)} isEditing={isEditing} />
      </DetailRow>
    </>
  )
}

export default IssueDetail