import Image from "next/image";

import KrisnavamsiPng from "../../public/krishna-vamsi.jpeg";

export const HeroSection = () => {
  return (
    <div className="flex w-full flex-col gap-4 justify-center items-center mt-16">
      <h1 className="text-gray-400 text-sm">{`<> Welcome to my space </>`}</h1>

      <Image
        src={KrisnavamsiPng}
        width={100}
        height={100}
        alt="person img"
        className="rounded-full my-4 grayscale"
      />

      <h2 className="text-gray-100 font-semibold text-md italic">
        Krishna vamsi Durga
      </h2>

      <p className="text-gray-400 text-sm">
        Front end developer | UI/UX developer
      </p>
      <p className="text-gray-400 text-sm text-center md:max-w-[500px]">
        Frontend developer with work experience in HTML, CSS, JavaScript,
        Typescript, React and Next.js. Passionate Frontend Developer with over 2
        years of experience in building robust and scalable web applications.
      </p>
    </div>
  );
};
