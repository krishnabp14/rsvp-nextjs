const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Material UI",
  "C++",
  "Git",
  "Design Systems",
];

export const Skills = () => {
  return (
    <div className="mt-12 flex justify-center flex-col items-center">
      <h1 className="text-gray-50 text-md font-semibold">Skills</h1>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-gray-600 p-2 border-[0.5px] rounded-md"
          >
            <p key={index} className="text-gray-400 text-sm">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
