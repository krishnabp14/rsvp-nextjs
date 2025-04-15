"use client";
import { CircleArrowOutUpRight } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="flex w-full justify-between pt-6">
      <div className="flex gap-3">
        <p className="text-sm text-gray-400">Home</p>
        <p className="text-sm text-gray-400">Experience</p>
        {/* <p className="text-sm text-gray-400">Blog</p>
        <p className="text-sm text-gray-400">Projects</p>
        <p className="text-sm text-gray-400">About</p> */}
      </div>
      <div
        className="flex gap-2 items-center"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1CG1d_JwcxA1eFj9_sBHZc_Bflzs8KUpl/view?usp=sharing",
            "_blank"
          )
        }
      >
        <p className="text-sm text-gray-400">Resume</p>
        <CircleArrowOutUpRight className="invert" size={15} />
      </div>
    </div>
  );
};
