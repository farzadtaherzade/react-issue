import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSignup = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({
      email,
      password,
      fullName,
    }: {
      email: string;
      password: string;
      fullName: string;
    }) => signup(email, password, fullName),
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("You logged in tou your account.");
    },
    onError: () => {
      toast.error("User already registered with this email");
    },
  });

  return { mutate, isLoading };
};
