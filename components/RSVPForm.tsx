"use client";
import { toast } from "sonner";

import { submitRSVP } from "@/app/actions/submitRSVP";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(0);
  const [isAttending, setIsAttending] = useState("yes");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("attendees", attendees.toString());
    formData.append("isAttending", isAttending);

    try {
      setLoading(true);
      const data = await submitRSVP(formData);

      if (data.success) {
        toast("RSVP submitted successfully");
        setLoading(false);
        setName("");
        setEmail("");
        setAttendees(0);
        setIsAttending("yes");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-[100vh] bg-slate mx-auto">
      <div className="w-full px-4 max-w-[500px] items-start mt-12 mx-auto">
        <h1 className="text-2xl font-bold text-black">Wedding RSVP</h1>

        <h2 className="text-lg max-md:text-sm text-black mt-4">
          {`We're excited to celebrate our special day with you! Please let us
          know if you can make it.`}
        </h2>

        <div className="flex flex-col gap-2 mt-4">
          <Label>Event Date</Label>
          <div className="border-1 border-slate-400 flex flex-center justify-center border-l-4 border-r-4">
            <Calendar fromDate={new Date()} toDate={new Date()} />
          </div>
        </div>
        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label className="text-black">Name</Label>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-black">Email</Label>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-black">Attendees(Number of Guests)</Label>
            <Input
              type="number"
              placeholder="0"
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-black mb-2">Will you attend??</Label>
            <RadioGroup
              defaultValue="yes"
              value={isAttending}
              onValueChange={(value) => setIsAttending(value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="option-one" />
                <Label htmlFor="option-one">Yes I&nbsp; joining</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="option-two" />
                <Label htmlFor="option-two">
                  Sorry, I couldn&nbsp;t make it
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button className={`mb-2`} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};
