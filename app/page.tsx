import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import {DateRange, Profile, Experience as ExperienceModel, Project, Link, Section} from "@/models";
import {HStack} from "@chakra-ui/react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import {Badge} from "@/models/Profile";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Demo = () => {
  const profile = new Profile(
    "Damian Kliber",
    "Hi, I'm Damian",
    "Full Stack Developer",
    "I'm a full stack developer with a passion for creating beautiful and functional web applications.",
    {
      linkedin: "https://www.linkedin.com/in/damian-kliber/",
      github: "https://",
      mail: 'mailto:'
    },
    'purple',
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus nec libero
    fermentum ultricies. Nullam auctor, libero ac ultricies tincidunt, elit libero
    fermentum libero, nec fermentum libero libero ut nunc. Nullam auctor, libero ac
    ultricies tincidunt, elit libero fermentum libero, nec fermentum libero libero ut nunc.
    Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum libero, nec fermentum
    libero libero ut nunc. Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum
    libero, nec fermentum libero libero ut nunc. Nullam auctor, libero ac ultricies tincidunt,
    elit libero fermentum libero, nec fermentum libero libero ut nunc. Nullam auctor, libero ac
    ultricies tincidunt, elit libero fermentum libero, nec fermentum libero libero ut nunc.
    Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum libero, nec fermentum
    libero libero ut nunc. Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum
    `,
    "https://bit.ly/dan-abramov",
    [
      new ExperienceModel(
        "Maks Solutions",
        new DateRange(new Date(2021, 0), new Date()),
        "Full Stack Developer",
        "https://bit.ly/dan-abramov",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus nec libero fermentum ultricies.
        Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum libero, nec fermentum libero libero ut nunc.
        Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum libero, nec fermentum libero libero ut nunc.
        Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum libero, nec fermentum libero libero ut nunc.`,
        [
          new Badge("React", "blue"),
          new Badge("Node.js", "green"),
          new Badge("TypeScript", "blue"),
          new Badge("GraphQL", "pink"),
          new Badge("PostgreSQL", "blue"),
          new Badge("Docker", "blue"),
          new Badge("AWS", "yellow"),
        ]
      ),
      new ExperienceModel(
        "Another Company",
        new DateRange(new Date(2021, 0), new Date()),
        "Full Stack Developer",
        "https://bit.ly/dan-abramov",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus nec libero fermentum ultricies.
        Nullam auctor, libero`,
        [
          new Badge("React", "blue"),
          new Badge("Node.js", "green"),
        ]
      )
    ],
    [
      new Project(
        'Travel App',
        'https://bit.ly/dan-abramov',
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus nec libero fermentum ultricies.
        Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum libero, nec fermentum libero libero ut nunc.
        Nullam auctor, libero ac ultricies tincidunt, elit libero fermentum libero, nec fermentum libero libero ut nunc.
        `,
        'https://travel-app-frontend-henna.vercel.app/',
        [
          new Link('Frontend', 'https://travel-app-frontend-henna.vercel.app/'),
          new Link('Backend', 'https://travel-app-backend-henna.herokuapp.com/')
        ],
        [
          new Badge('React', 'blue'),
          new Badge('Node.js', 'green'),
          new Badge('TypeScript', 'blue')
        ]
      ),
      new Project(
        'Another Project',
        'https://bit.ly/dan-abramov',
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus nec libero fermentum ultricies.
        Nullam auctor, libero`,
        'https://travel-app-frontend-henna.vercel.app/',
        [
          new Link('Frontend', 'https://travel-app-frontend-henna.vercel.app/'),
          new Link('Backend', 'https://travel-app-backend-henna.herokuapp.com/')
        ],
        [
          new Badge('React', 'blue'),
          new Badge('Node.js', 'green'),
        ]
      ),
      new Project(
        'NEwest Project',
        'https://bit.ly/dan-abramov',
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus nec libero fermentum ultricies.
        Nullam auctor, libero`,
        'https://travel-app-frontend-henna.vercel.app/',
        [
          new Link('Frontend', 'https://travel-app-frontend-henna.vercel.app/'),
          new Link('Backend', 'https://travel-app-backend-henna.herokuapp.com/')
        ],
        [
          new Badge('React', 'blue'),
          new Badge('Node.js', 'green'),
        ]
      )
    ]
  )

  const sections = [
    new Section('about', 'About'),
    new Section('experience', 'Experience'),
    new Section('projects', 'Projects'),
    new Section('contact', 'Contact'),
  ]

  return (
    <>
      <Navbar
        profile={JSON.parse(JSON.stringify(profile))}
        sections={JSON.parse(JSON.stringify(sections))}
      />
      <MainSection profile={JSON.parse(JSON.stringify(profile))} />
      <About profile={JSON.parse(JSON.stringify(profile))} />
      <Experience
        experience={profile.experience}
        mainColor={profile.mainColor}
      />
      <Projects
        projects={profile.projects}
        mainColor={profile.mainColor}
      />
      <Contact
        socialMedia={profile.socialMedia}
        mainColor={profile.mainColor}
      />
    </>
  )
}

export default Demo
