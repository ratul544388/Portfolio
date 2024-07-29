import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const myTwitterLink = "https://twitter.com/Ratul2582";
export const myGithubLink = "https://github.com/ratul544388";
export const MyLinkdinLink =
  "https://www.linkedin.com/in/ratul-islam-a0774521a";
export const myFacebookLink = "https://www.facebook.com/ratul544388";
export const myEmail = "ratulislam544388@gmail.com";
export const myAddress = "Keranigonj Dhaka 1310, Bangladesh";
export const myPhone = "+8801815555105";
export const myFiverrLink = "https://www.fiverr.com/ratul544";


import shoppingAppImage from '@/../public/projects/shopping-app.webp'
import digitalMarketplaceImage from '@/../public/projects/digital-marketplace.webp'
import wafflesImage from '@/../public/projects/waffles.webp'
import gymImage from '@/../public/projects/gym.webp'
import twitterCloneImage from '@/../public/projects/twitter-clone.webp'
import mernBlogAppImage from '@/../public/projects/mern-blog-app.webp'
import foodOrderingAppImage from '@/../public/projects/food-ordering-app.webp'
import blogAppImage from '@/../public/projects/blog-app.webp'
import doctorBookingAppImage from '@/../public/projects/doctor-booking-app.webp'
import portfolio_1_image from '@/../public/projects/portfolio-1.webp'
import portfolio_2_image from '@/../public/projects/portfolio-2.webp'
import portfolio_3_image from '@/../public/projects/portfolio-3.webp'
import portfolio_4_image from '@/../public/projects/portfolio-4.webp'
import portfolio_5_image from '@/../public/projects/portfolio-5.webp'
import calmLandingPageImage from '@/../public/projects/calm-landing-page.webp'
import universityLandingPageImage from '@/../public/projects/university-landing-page.webp'
import grassRootLandingPageImage from '@/../public/projects/grass-root-landing-page.webp'
import carBookingAppImage from '@/../public/projects/car-booking-app.webp'
import mernNoteAppImage from '@/../public/projects/mern-note-app.webp'
import simpleProjectsImage from '@/../public/projects/simple-projects.webp'


import { TbBrandFiverr } from "react-icons/tb";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/#about-me",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const projectCategories = [
  "all projects",
  "social media",
  "ecommerce",
  "portfolio",
  "booking",
  "landing page",
] as const;

export const socialLinks = [
  {
    label: "Github",
    icon: FaGithub,
    href: myGithubLink,
  },
  {
    label: "Linkdin",
    icon: FaLinkedin,
    href: MyLinkdinLink,
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    href: myTwitterLink,
  },
  {
    label: "Facebook",
    icon: FaFacebook,
    href: myFacebookLink,
  },
  {
    label: "Fiverr",
    icon: TbBrandFiverr,
    href: myFiverrLink,
  },
];

export const techImages = [
  "/techs/html.png",
  "/techs/css.png",
  "/techs/tailwind-css.png",
  "/techs/javascript.png",
  "/techs/typescript.png",
  "/techs/nextjs.jpg",
  "/techs/framer-motion.png",
  "/techs/express.png",
  "/techs/mysql.png",
  "/techs/mongodb.png",
  "/techs/prisma.png",
  "/techs/tanstack-query.png",
  "/techs/stripe.png",
];

export const projects = [
  {
    name: "Glamify Shopping App",
    image: shoppingAppImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/ecommerce",
    deployedLink: "https://ecommerce-coral-delta.vercel.app",
  },
  {
    name: "Digital Marketplace",
    image: digitalMarketplaceImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/digital-marketplace",
    deployedLink: "https://digital-marketplace-rouge.vercel.app",
  },
  {
    name: "Waffles",
    image: wafflesImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/waffle",
    deployedLink: "https://waffle-two.vercel.app/",
  },
  {
    name: "Gym Admin Management",
    image: gymImage,
    githubLink: "https://github.com/ratul544388/gym-admin-management",
    deployedLink: "https://afsg.vercel.app/",
  },
  {
    name: "Twitter Clone",
    image: twitterCloneImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/Twitter-clone-next-14",
    deployedLink: "https://twitter-clone-next-14.vercel.app",
  },
  {
    name: "Mern-blog-app",
    image: mernBlogAppImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/mern-blog-app",
    deployedLink: "https://mern-blog-app-kij0.onrender.com/",
  },
  {
    name: "Food Ordering App",
    image: foodOrderingAppImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app",
  },
  {
    name: "Blog App",
    image: blogAppImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app",
  },
  {
    name: "Doctor Booking App",
    image: doctorBookingAppImage,
    category: "booking",
    githubLink: "https://github.com/ratul544388/Doctor-Booking-App",
    deployedLink: "https://doctor-booking-app.vercel.app",
  },
  {
    name: "Portfolio 1",
    image: portfolio_1_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-1",
    deployedLink: "https://ratulcodes-1.vercel.app",
  },
  {
    name: "Portfolio 2",
    image: portfolio_2_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-2",
    deployedLink: "https://ratulcodes-2.vercel.app",
  },
  {
    name: "Portfolio 3",
    image: portfolio_3_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-3",
    deployedLink: "https://ratulcodes-3.vercel.app",
  },
  {
    name: "Portfolio 4",
    image: portfolio_4_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-4",
    deployedLink: "https://ratulcodes-4.vercel.app",
  },
  {
    name: "Portfolio 5",
    image: portfolio_5_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-5",
    deployedLink:
      "https://ratulcodes-5.vercel.apphttps://ostad-assignment-1.onrender.com",
  },
  {
    name: "Calm Landing Page",
    image: calmLandingPageImage,
    category: "landing page",
    githubLink: "https://github.com/ratul544388/calm-landing-page",
    deployedLink: "https://calm-landing-page.vercel.app/",
  },
  {
    name: "University Landing Page",
    image: universityLandingPageImage,
    category: "landing page",
    githubLink: "https://github.com/ratul544388/university-landing-page",
    deployedLink:
      "https://university-landing-page-7jiet8en9-ratul544388.vercel.app/",
  },
  {
    name: "Grass Root Landing Page",
    image: grassRootLandingPageImage,
    category: "landing page",
    githubLink:
      "https://github.com/ratul544388/grass-root-farmers-landing-page",
    deployedLink: "https://grass-root-farmers-landing-page.vercel.app/",
  },
  {
    name: "Car Booking App",
    image: carBookingAppImage,
    category: "booking",
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
  {
    name: "Mern Note App",
    image: mernNoteAppImage,
    githubLink: "https://github.com/ratul544388/mern-note-app",
    deployedLink: "https://mern-note-app-qyl8.onrender.com/",
  },
  {
    name: "Simple Projects",
    image: simpleProjectsImage,
    githubLink: "https://github.com/ratul544388/mini-projects",
    deployedLink: "https://mini-projects-zeta.vercel.app",
  },
];

export const reviews = [
  {
    name: "John Doe",
    username: "john_doe123",
    image: "/reviews/user-1.jpg",
    comment:
      "As a fellow developer, I must say your work is impressive! Your attention to detail and problem-solving skills are top-notch.",
  },
  {
    name: "Alex Johnson",
    username: "alex_johnson789",
    image: "/reviews/user-2.jpg",
    comment:
      "Your projects are inspiring! Your ability to create seamless user experiences is commendable.",
  },
  {
    name: "Jane Smith",
    username: "jane_smith456",
    image: "/reviews/user-3.jpg",
    comment:
      "Wow, your coding skills are incredible! I'm amazed at how efficiently you handle both front-end and back-end development.",
  },
  {
    name: "Emily Brown",
    username: "emily_brown321",
    image: "/reviews/user-4.jpg",
    comment:
      "Your problem-solving skills are next level! It's evident that you're dedicated to delivering high-quality work.",
  },
  {
    name: "Michael Lee",
    username: "michael_lee654",
    image: "/reviews/user-5.jpg",
    comment:
      "Impressive work, as always! Your expertise in both front-end and back-end development shines through in every project.",
  },
];
