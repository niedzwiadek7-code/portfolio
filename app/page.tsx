import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import {DateRange, Profile, Experience as ExperienceModel} from "@/models";
import {HStack} from "@chakra-ui/react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import {Badge} from "@/models/Profile";

const Demo = () => {
  const profile = new Profile(
    "Damian Kliber",
    "Hi, I'm Damian",
    "Full Stack Developer",
    "I'm a full stack developer with a passion for creating beautiful and functional web applications.",
    {
      linkedin: "https://www.linkedin.com/in/damian-kliber/",
      github: "https://"
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
          new Badge("TypeScript", "blue")
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
    ]
  )

  return (
    <>
      <Navbar profile={JSON.parse(JSON.stringify(profile))} />
      <MainSection profile={JSON.parse(JSON.stringify(profile))} />
      <About profile={JSON.parse(JSON.stringify(profile))} />
      <Experience
        experience={profile.experience}
        mainColor={profile.mainColor}
      />
    </>
  )
}

export default Demo
