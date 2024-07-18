import { Error, Form, FormHeader, FormRow, Input, Label } from '../issues/IssueForm';
import { Button } from '../../ui/Button';
import MiniLoader from '../../ui/MiniLoader';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignup } from '../../../hooks/useSignup';
import { Link } from 'react-router-dom';


interface IFormInput {
    email: string,
    password: string,
    fullName: string,
    repeatPassword: string

}

const SignupForm = () => {
    const { mutate, isLoading } = useSignup()
    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = ({ email, password, fullName }) => {
        mutate({ email, password, fullName }, {
            onSettled: () => {
                reset()
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader>Signup</FormHeader>
            <FormRow>
                <Label>Full Name</Label>
                <Input type="text" placeholder="Full Name" {...register("fullName", {
                    required: true,
                })} />
                <Error>
                    {errors.fullName && <Error>Full Name is required</Error>}
                </Error>
            </FormRow>
            <FormRow>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" {...register("email", {
                    required: "This field is required",
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Please provide a valid email"
                    }
                })} />
            </FormRow>
            {errors.email && <Error>{errors.email.message}</Error>}
            <FormRow>
                <Label>Password</Label>
                <Input type="password" placeholder="Password" {...register("password", {
                    required: "This field is required",
                    minLength: {
                        value: 6,
                        message: "Password need to be atleast 6 character"
                    },
                })} />
                {errors.password && <Error>{errors.password.message}</Error>}
            </FormRow>
            <FormRow>
                <Label>Repeat Password</Label>
                <Input type="password" placeholder="Repeat Password" {...register("repeatPassword", {
                    required: "This field is required",
                    validate: (value) => value === getValues().password || "Password need to match"
                })} />
                {errors.repeatPassword && <Error>{errors.repeatPassword.message}</Error>}
            </FormRow>
            <p>dont have an account? <Link to='/auth/signin'>signin</Link> </p>
            <FormRow>
                <Button disabled={isLoading} size="md">
                    {isLoading && <MiniLoader />}
                    Signup
                </Button>
            </FormRow>
        </Form>
    );
};

export default SignupForm;
