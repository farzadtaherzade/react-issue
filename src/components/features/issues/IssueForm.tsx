import styled, { css } from "styled-components"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../ui/Button";
import { Enums, TablesInsert, TablesUpdate } from "../../../utils/database.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertIssue, updateIssue } from "../../../services/apiIssues";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MiniLoader from "../../ui/MiniLoader";
import Select from "../../ui/Select";

export const Form = styled.form`
    width:100%;
    padding:2rem;
    background-color: var(--color-grey-0);
    box-shadow: var(--shadow-md);
    border-radius:12px;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
`

export const FormRow = styled.div`
    display:flex;
    flex-direction: column;
    gap: .8rem;
`

export const Input = styled.input<{ $variant?: "ghost" }>`
    color: var(--color-grey-700);
    font-size: 1.4rem;

    &::placeholder {
        color: var(--color-grey-400);
        font-weight:100;
        font-size: 1.27rem;
    }

    ${props => props.$variant === "ghost" ?
        css`
            border: none;
            background-color:transparent;
            padding:0;
    `:
        css`
            padding: .5rem 1.2rem;
            border: 1px solid var(--color-grey-200);
            border-radius: 12px;
            background-color: var(--color-grey-100);
            font-size: 1.14rem;
        `
    }
`
export const Label = styled.label`
  font-weight: 600;
  font-size: 1.1rem;
  color:var(--color-grey-900);
`;

export const Error = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-red-700);
`;

export const FormHeader = styled.div`
    text-align:center;
    font-size:2rem;
    font-weight:bold;
    margin-bottom: 1.5rem;
    color:var(--color-grey-900);
`

const SimpleMDEStyled = styled(SimpleMDE)`
  color:var(--color-grey-900);
`

const statuses: { label: string, value?: Enums<"status"> }[] = [
    { label: "Open", value: "open" },
    { label: "Closed", value: "closed" },
    { label: "In Progress", value: "in_progress" }
]

interface IssueFormProps {
    text: string,
    issue?: TablesUpdate<"issue">,
    setIsEditing?: () => void
}

function IssueForm({ text, issue, setIsEditing }: IssueFormProps) {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm<TablesInsert<'issue'>>()

    const { mutate: createIssue, isLoading: isCreating } = useMutation({
        mutationFn: insertIssue,
        onSuccess: ({ id }) => {
            toast.success("New Issue successfully created");
            if (issue) queryClient.invalidateQueries({ queryKey: ["issue", issue.id] });
            else queryClient.invalidateQueries({ queryKey: ["issue"] });
            reset()
            navigate(`/issues/${id}`)
        },
        onError: (error: Error) => toast.error(error.message)
    })

    const { mutate, isLoading: isUpdating } = useMutation({
        mutationFn: ({ data, id }: { data: TablesUpdate<"issue">, id: number }) => updateIssue(data, id),
        onSuccess: () => {
            toast.success("Issue successfully updated");
            queryClient.invalidateQueries({ queryKey: ["issue"] });
            reset()
            if (setIsEditing) {
                setIsEditing()
            }
        },
        onError: (error: Error) => toast.error(error.message)
    })

    const isLoading = isUpdating || isCreating

    const onSubmit: SubmitHandler<TablesInsert<'issue'>> = (data: TablesInsert<'issue'>) => {
        if (issue) mutate({ data, id: issue.id! });
        else createIssue(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader>{text}</FormHeader>
            <FormRow>
                <Input type="text" placeholder="Issue Subject..." defaultValue={issue?.subject} $variant="ghost" id="subject" {...register("subject", {
                    required: true,
                    maxLength: 125,
                    minLength: 5
                })} />
                {errors.subject && <Error>Subject is required</Error>}
            </FormRow>
            {issue && (
                <FormRow>
                    <Label>Status</Label>
                    <Select defaultValue={issue.status || "open"} {...register("status")}>
                        {statuses.map((status, i) => (
                            <option value={status.value} key={i}>{status.label}</option>
                        ))}
                    </Select>
                </FormRow>
            )}
            <FormRow>
                <Label>Message</Label>
                <Controller
                    name="message"
                    control={control}
                    rules={{
                        required: true
                    }}
                    defaultValue={issue?.message}
                    render={({ field }) => <SimpleMDEStyled placeholder="Your Message..." id="message" {...field} />}
                />
            </FormRow>
            <FormRow>
                <Button disabled={isLoading} size="md">
                    {issue ? "Updating Issue" : "Add New Issue"} {" "}
                    {isLoading && <MiniLoader />}
                </Button>
            </FormRow>
        </Form>
    )
}

export default IssueForm