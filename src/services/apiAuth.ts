import { supabase } from "../utils/supabase";

export const signin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const signup = async (
  email: string,
  password: string,
  fullName: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
};

export const currentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  console.log(data);
  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
};
