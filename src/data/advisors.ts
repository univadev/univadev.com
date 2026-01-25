export interface Advisor {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export const advisors: Advisor[] = [
  {
    name: "Ryan Sun",
    role: "Computer Engineering @ University of Toronto",
    image: "/univadev.svg",
    linkedin: "https://www.linkedin.com/in/ryanyizhesun/",
  },
  {
    name: "Liam Kinnett",
    role: "Mechanical Engineering @ Oregon State University",
    image: "/univadev.svg",
    linkedin: "https://www.linkedin.com/in/liam-kinnett-29860532b/",
  },
  {
    name: "Farhaan Ali",
    role: "CS @ Queens",
    image: "/univadev.svg",
    linkedin: "https://www.linkedin.com/in/farhaan-ali/",
  },
];

