"use client";
import { login } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    try {
      setLoading(true);
      const response = await login(formData);

      if (response.success) {
        router.push("/admin/rsvps");
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="bg-white p-8 rounded shadow-md mx-4 max-md:w-full md:min-w-[400px]">
        <h1 className="text-lg font-bold mb-4">Admin Login</h1>
        <form className="flex flex-col gap-6" onSubmit={handleLoginSubmit}>
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button variant={"default"} type="submit" disabled={loading}>
            {loading ? "Authenticating..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
