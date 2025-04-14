import LinkedInSvg from "../../public/linkedin.svg";
import GithubSvg from "../../public/github.svg";
import InstagramSvg from "../../public/instagram.svg";
import Image from "next/image";

const socialIcons = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/krishna-vamsi-9a8ab2192/",
    icon: LinkedInSvg,
  },
  {
    name: "GitHub",
    href: "https://github.com/krishnabp14",
    icon: GithubSvg,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your-username",
    icon: InstagramSvg,
  },
];

export const ConnectWithMe = () => {
  return (
    <div className="mt-12 flex items-center flex-col pb-12">
      <h1 className="text-gray-50 text-md font-semibold">Connect With Me</h1>
      <div className="flex gap-4">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4"
          >
            <Image
              src={icon.icon}
              alt={icon.name}
              width={20}
              height={20}
              className="invert"
            />
            <p className="text-gray-400 text-sm">{icon.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
