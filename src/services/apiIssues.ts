import {
  Enums,
  Tables,
  TablesInsert,
  TablesUpdate,
} from "../utils/database.types";
import { supabase } from "../utils/supabase";

export async function getAllIssues(
  status?: Enums<"status">,
  sorting?: string | null
) {
  let query = supabase.from("issue").select(`*`);

  if (status) query = query.eq("status", status);
  if (sorting) query = query.order(sorting, { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("couldn't find issues");
  }
  return data;
}

export async function getOneIssue(id: number): Promise<Tables<"issue">> {
  const { data, error } = await supabase
    .from("issue")
    .select(`*`)
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(`couldn't find issue with id -> ${id}`);
  }
  return data;
}

export async function updateIssue(issue: TablesUpdate<"issue">, id: number) {
  const { data, error } = await supabase
    .from("issue")
    .update(issue)
    .eq("id", id)
    .select("id")
    .single();

  if (error) {
    console.error(error);
    throw new Error(`couldn't update issue with id ${id}`);
  }
  return data;
}
export async function insertIssue(newIssue: TablesInsert<"issue">) {
  const { data, error } = await supabase
    .from("issue")
    .insert([newIssue])
    .select("id")
    .single();

  if (error) {
    console.error(error);
    throw new Error("couldn't insert issue");
  }
  return data;
}

export async function deleteIssue(id: number) {
  const { data, error } = await supabase.from("issue").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(`couldn't delete issue with id -> ${id}`);
  }
  return data;
}
