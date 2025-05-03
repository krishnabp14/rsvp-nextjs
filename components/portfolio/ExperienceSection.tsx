import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Software Engineer",
    company: "Cars24",
    duration: "Dec 2023 - Present",
    points: [
      `Developed Progressive Web Apps (PWAs) for key loan journeys including Personal Loan and Loan Against Car.`,
      `Integrated Sentry for real-time error tracking and monitoring across production environments, improving issue
resolution times.`,
      `Implemented CleverTap event tracking to monitor user behavior and trigger personalized engagement campaigns.`,
      `Optimized SEO and Core Web Vitals (LCP, CLS, INP) on the Loans24 platform, leading to faster page loads and
improved search performance.`,
    ],
  },
  {
    role: "Software Engineer",
    company: "Bharatpe",
    duration: "Dec 2023 - Nov 2024",
    points: [
      `Developed and integrated a feature for migrating the entire user base from one NBFC partner (LDC) to another
NBFC partner (LiquiLoans).`,
      `Developed and integrated the Cashback Wallet feature into the product, and raised 100Cr+ of required lending funds
in 1month by running various cashback campaigns.`,
      `Developed a feature for scheme switch where users can migrate all their liquid investments to lock-in investments.`,
      `Implemented portfolio and transaction history screens to assist users in managing their funds and streamline financial
tracking processes.`,
      `Had strong familiarity with deployments using Jenkins and debugging React applications using developer tools.`,
      `Contributed significantly to the development of various features for both the 12% Club platform and the Bharatpe
merchant’s app, leveraging technologies such as React, Redux Toolkit, and TypeScript.`,
    ],
  },
  {
    role: "Software Engineer",
    company: "F5 Networks",
    duration: "July 2022 - Dec 2023",
    points: [
      `Spearheaded the user interface(UI) development for inline services, including L3, HTTP-Proxy, and OffBox AWAF`,
      `Revamped entire codebase by migrating from Q library to promises in JavaScript, optimizing performance and
maintainability.`,
      `Orchestrated successful Checkmarx runs on entire codebase, identifying vulnerabilities and addressing false positives.`,
      `Developed multiple features within the SSLO product using JavaScript,React contributing to its functionality and
enhancing user experience.`,
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div className="px-6 text-gray-100 pt-6 mt-6">
      <h1 className="text-gray-50 text-md font-semibold flex justify-center">
        Experience
      </h1>

      <div className="relative border-l border-gray-700 mt-4 pl-6">
        {experience.map((current, index) => {
          return (
            <div key={index} className="mb-10">
              <div className="absolute -left-[14px] w-6 h-6 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center">
                <Briefcase size={12} className="text-white" />
              </div>

              <h3 className={"text-md font-semibold text-gray-200"}>
                {current.role} - {current.company}
              </h3>
              <p className={"text-gray-400 text-sm mb-2"}>{current.duration}</p>

              <ul className="list-disc ml-5 space-y-2">
                {current.points.map((point, index) => (
                  <li key={index} className={"text-gray-400 text-sm"}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
