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
      <p
        onClick={() => router.push("/machine-coding/pagination")}
        style={{
          marginTop: "24px",
          fontSize: "18px",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        2. Basic Pagination
      </p>
      <p
        onClick={() => router.push("/machine-coding/country-capital-game")}
        style={{
          marginTop: "24px",
          fontSize: "18px",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        3. Country Capital Game
      </p>
      <p
        onClick={() => router.push("/machine-coding/interactive-shape")}
        style={{
          marginTop: "24px",
          fontSize: "18px",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        4. Interactive Shape Part1
      </p>
    </div>
  );
};

export default MachineCoding;
