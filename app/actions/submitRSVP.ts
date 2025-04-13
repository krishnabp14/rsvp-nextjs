"use server";

import { createClient } from "../utils/supabase/server";

export async function submitRSVP(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const attendees = formData.get("attendees") as string;
  const isAttending = formData.get("isAttending") as string;

  const { data, error } = await supabase.from("RSVP").insert({
    name,
    email,
    attendees,
    isAttending,
  });

  console.log(data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "RSVP submitted successfully",
  };
}
