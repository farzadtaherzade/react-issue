import { supabase } from "../utils/supabase";

export const getStatuses = async () => {
  const { count: openCount, error: openError } = await supabase
    .from("issue")
    .select("", { count: "exact" })
    .eq("status", "open");

  const { count: inProgressCount, error: inProgressError } = await supabase
    .from("issue")
    .select("*", { count: "exact" })
    .eq("status", "in_progress");

  const { count: closedCount, error: closedError } = await supabase
    .from("issue")
    .select("*", { count: "exact" })
    .eq("status", "closed");

  if (openError && inProgressError && closedError)
    throw new Error("could not get status counts");

  return { openCount, inProgressCount, closedCount };
};

export const getLatestIssue = async () => {
  const { data, error } = await supabase.from("issue").select("*").range(0, 4);

  if (error) throw new Error("could get latest issues");

  return data;
};
