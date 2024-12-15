import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import {Profile} from "@/models";
import {HStack} from "@chakra-ui/react";

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
    'purple'
  )

  return (
    <>
      <Navbar
        profile={JSON.parse(JSON.stringify(profile))}
      />
      <MainSection
        profile={JSON.parse(JSON.stringify(profile))}
      />
    </>
  )
}

export default Demo
