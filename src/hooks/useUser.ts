import { useQuery } from "@tanstack/react-query";
import { currentUser } from "../services/apiAuth";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: currentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
};
