import { Form, FormHeader, FormRow, Input, Label } from '../issues/IssueForm';
import { Button } from '../../ui/Button';
import MiniLoader from '../../ui/MiniLoader';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignin } from '../../../hooks/useSignin';


interface IFormInput {
    email: string,
    password: string
}

const SigninForm = () => {
    const { mutate, isLoading } = useSignin()
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
        mutate({ email, password }, {
            onSettled: () => {
                reset()
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader>Signin</FormHeader>
            <FormRow>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" {...register("email", {
                    required: true,
                })} />
            </FormRow>
            <FormRow>
                <Label>Password</Label>
                <Input type="password" placeholder="Password" {...register("password", {
                    required: true
                })} />
            </FormRow>
            <FormRow>
                <Button disabled={isLoading} size="md">
                    {isLoading && <MiniLoader />}
                    Signin
                </Button>
            </FormRow>
        </Form>
    );
};

export default SigninForm;
