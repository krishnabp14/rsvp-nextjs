"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { signOut } from "@/app/actions/auth";
import { toast } from "sonner";

export const NavBar = () => {
  const router = useRouter();
  const handleSignout = async () => {
    try {
      const response = await signOut();
      if (response.success) {
        router.push("/login");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">RSVPs</h1>

      <div>
        <Button className="" variant="outline" onClick={() => router.push("/")}>
          Home
        </Button>
        <Button className="" variant="ghost" onClick={handleSignout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
