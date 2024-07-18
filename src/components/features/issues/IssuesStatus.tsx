import { Enums } from "../../../utils/database.types";
import { useSearchParams } from "react-router-dom";
import Select from "../../ui/Select";
import styled from "styled-components";

const statuses: { label: string, value?: Enums<"status"> }[] = [
  { label: "All" },
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
  { label: "In Progress", value: "in_progress" }
]

const Option = styled.option`
  color:var(--color-grey-900);
`

function IssuesStatus() {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <Select $type="white" defaultValue={searchParams.get("status") || ""} onChange={(e) => {
      console.log('doaisihdsa')
      const params = new URLSearchParams()
      const status = e.target.value
      if (status && status !== "All") params.append("status", status)
      if (searchParams.get("sortBy")) params.append("sortBy", searchParams.get("sortBy")!)
      setSearchParams(params)
    }}>
      {statuses.map((status, i) => (
        <Option value={status.value} key={i}>{status.label}</Option>
      ))}
    </Select>
  )
}

export default IssuesStatus