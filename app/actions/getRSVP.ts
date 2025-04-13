"use server";

import { createClient } from "../utils/supabase/server";

export async function getRSVPS() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("RSVP").select("*");

  console.log(data);
  console.log(error);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    data,
    message: "RSVPs fetched successfully",
  };
}
