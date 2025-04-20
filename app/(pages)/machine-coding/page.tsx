"use client";
import { useRouter } from "next/navigation";

const MachineCoding = () => {
  const router = useRouter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ marginTop: "24px", fontSize: "40px", fontWeight: "bold" }}>
        Machine Coding Questions
      </h1>

      <p
        onClick={() => router.push("/machine-coding/multi-step-form")}
        style={{
          marginTop: "24px",
          fontSize: "18px",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        1. Multi step form with validations.
      </p>
    </div>
  );
};

export default MachineCoding;
