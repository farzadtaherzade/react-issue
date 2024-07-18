import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/apiAuth";
import toast from "react-hot-toast";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth/signin", { replace: true });
      toast.success("you loggout successfully!");
    },
  });
  return { mutate, isLoading };
};
