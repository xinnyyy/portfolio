import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
import React from "react";

const person: Person = {
  firstName: "Xin Yi",
  lastName: "Ho",
  name: `Ho Xin Yi`,
  role: "Aspiring Data Analyst",
  avatar: "/images/avatar.png",
  email: "hohohoxinyi@gmail.com",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/xinnyyy",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ho-xin-yi-2257022a5/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Xin Yi, a Data Analytics Intern at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.google.com/calendar/u/4/r/appointment?hl=en-SG&pli=1",
  },


  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p className="mb-6">
          Hello! I'm Xin Yi, an aspiring Data Analyst. My passion lies in bridging analytics with empathy,
          designing dashboards and systems that not only inform but also inspire people to act confidently
          on insights.
        </p>
        <p>
          Beyond data, I find joy in sharing what I learn. As an educator, I believe that teaching is one of
          the purest ways to deepen understanding, whether it’s simplifying complex analytics for beginners or
          guiding students to see how technology can empower creativity. To me, the intersection of learning
          and data isn’t just a career path—it’s how I make sense of the world!
        </p>
      </>
    ),
    images: [
      {
        src: "/images/teachingnew1.jpg",
        alt: "Teaching students group activity",
        width: 4,
        height: 5,
      },
      {
        src: "/images/teachingnew2.png",
        alt: "Classroom discussion",
        width: 4,
        height: 3,
      },
      {
        src: "/images/teachingnew3.jpg",
        alt: "Students group photo",
        width: 4,
        height: 3,
      },
    ],
  },
  

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "WPP Media",
        timeframe: "2025 - Present",
        role: "Data Analytics Intern",
        achievements: [
          <>
            Built interactive dashboards using PowerBI to conduct competitive market analysis, providing insights for media strategy decisions.
          </>,
          <>
            Cleaned and transformed raw datasets in Excel and automated recurring processes using Python scripts, improving efficiency and accuracy.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/wpp.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "LYZA EDUCATION",
        timeframe: "2024 - 2025",
        role: "STEM and Coding Intern",
        achievements: [
          <>
            Conducted exploratory Data Analysis and Statistical Modeling using R Studio, Tableau and SQL, including statistical analysis, exploratory data analysis, and the creation of insightful visualizations for effective ommunication of findings. This contributed to a 58% increase in sign-ups for Programmes
          </>,
          <>
            Improved the social robot Kebbi by Implementing 3 more features, making use of Machine Learning and
            Artificial Intelligence Concepts for it to act as AI Concierge for use in various industries.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "National University of Singapore, 2023-2027",
        description: <>Studying Business Analytics with specialisation in Financial Analytics</>,
      },
      {
        name: "Nanyang Junior College",
        description: <>87.5/90 rank point.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Google Cloud",
            icon: "googlecloud",
          },
          {
            name: "Vue.js",
            icon: "vuejs",
          },
          {
            name: "Streamlit",
            icon: "streamlit",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "R Studio",
            icon: "rstudio",
          },
          {
            name: "SQL",
            icon: "sql",
          },
        ],
      },
      {
        title: "Dashboard Tools",
        tags: [
          {
            name: "Looker Studio",
            icon: "Looker",
          },
          {
            name: "Tableau",
            icon: "tableau",
          },
          {
            name: "PowerBI",
            icon: "supabase",
          },
        ],
  
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
