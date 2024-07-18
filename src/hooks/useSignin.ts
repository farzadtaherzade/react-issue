import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signin } from "../services/apiAuth";
import toast from "react-hot-toast";

export const useSignin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signin(email, password),
    onSuccess: ({ user }) => {
      queryClient.setQueriesData(["user"], user);
      toast.success("You logged in tou your account.");
      navigate("/dashboard", { replace: true });
    },
    onError(error) {
      console.log(error);
      toast.error("Email or Password are not valid!");
    },
  });
  return { mutate, isLoading };
};
