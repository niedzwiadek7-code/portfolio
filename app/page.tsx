import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import {Profile} from "@/models";
import {HStack} from "@chakra-ui/react";
import About from "@/components/About";

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
    "https://bit.ly/dan-abramov"
  )

  return (
    <>
      <Navbar profile={JSON.parse(JSON.stringify(profile))} />
      <MainSection profile={JSON.parse(JSON.stringify(profile))} />
      <About profile={JSON.parse(JSON.stringify(profile))} />
    </>
  )
}

export default Demo
