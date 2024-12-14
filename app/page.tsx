import Navbar from "@/components/Navbar";
import {Profile} from "@/models";

const Demo = () => {
  const profile = new Profile(
    "Damian Kliber"
  )

  return (
    <>
      <Navbar
        profile={JSON.parse(JSON.stringify(profile))}
      />
    </>
  )
}

export default Demo
