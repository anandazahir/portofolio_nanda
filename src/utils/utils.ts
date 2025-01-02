import { Variants } from "motion/react";
const link  = [
    {
        title: "Resume",
        link:"#resume"
    },
    {
        title: "Portfolio",
        link:"#portofolio"
    },
    {
        title: "Connect With Me",
        link:"#contact"
    },
];
const techStack = [
    {
      name: "Reactjs",
      style: {
        top: "83.1148%",
        left: "47.2385%",
        transform: "rotate(18.1042deg)",
      },
    },
    {
      name: "Tailwindcss",
      style: {
        top: "54.0783%",
        left: "1.6394%",
        transform: "rotate(-24.9739deg)",
      },
    },
    {
      name: "Laravel",
      style: {
        top: "1.532%",
        left: "5.0947%",
        transform: "rotate(12.5156deg)",
      },
    },
    {
      name: "TypeScript",
      style: {
        top: "30.3903%",
        left: "10.6405%",
        transform: "rotate(-16.2246deg)",
      },
    },
    {
      name: "MySQL",
      style: {
        top: "81.9333%",
        left: "1.6344%",
        transform: "rotate(-2.0139deg)",
      },
    },
    {
      name: "Figma",
      style: {
        top: "60.0318%",
        left: "65.2117%",
        transform: "rotate(1.47224deg)",
      },
    },
    {
      name: "Git",
      style: {
        top: "5%",
        left: "79.4529%",
        transform: "rotate(-26.3525deg)",
      },
    },
  ];
  const techStackVariants: Variants = {
    open: (custom: { index: number; techStack: typeof techStack }) => {
      const { index, techStack } = custom;

      const rotation = techStack[index]?.style.transform
        ? parseFloat(
            techStack[index].style.transform.match(/-?\d+(\.\d+)?/g)?.[0] || "0"
          )
        : 0;

      return {
        y: 0,
        rotate: rotation,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      };
    },
    closed: {
      y: -100,
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };
  const variantChild2 = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      y: 50, // Starts below
      transition: { duration: 0.2 },
    },
  };

  const variantChild4 = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      y: 50, // Starts below
    },
  };
  const lineVariants = {
    open: {
      scaleY: 1, // Vertical scaling
      opacity: 1,
      rotate: 90,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
    closed: {
      scaleY: 0, // Collapsed height
      opacity: 0,
      rotate: 90,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };

  const lineVariantsX = {
    open: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
    closed: {
      scaleX: 0,
      opacity: 0,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };

  const ExperienceItem = [
    {

        title: "Internship Network Field Engineer",
        company: "Jakarta Smart City",
        durationStart: "January 2023",
        durationEnd: "February 2023",
       
    },
    {
        title: "FrontEnd Developer",
        company: "PT Garbantara Depo",
        durationStart: "Juny 2023",
        durationEnd: "Agustus 2024",
    }
]
const ProjectItem = [
    {
        title: "simgd",
        keyword:"simgd",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas",
        techStack: ["Laravel.png", "tailwind.png", "MySQL.png"],
        link: "https://simgd-garbantara.com/",
        image: "simgd.png",
    },
    {
        title: "zoopedia",
        keyword:"zoopedia",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas",
        techStack: ["React.png", "tailwind.png"],
        link: "https://simgd-garbantara.com/",
        image: "ZooPedia.png",
    },

]
export {link, techStack, techStackVariants, variantChild2, variantChild4, lineVariants, lineVariantsX, ExperienceItem, ProjectItem}
