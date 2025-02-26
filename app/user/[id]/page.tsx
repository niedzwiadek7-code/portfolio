import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import { Profile, Section} from "@/models";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

type Params = {
  id: string
}

const Demo = async ({ params }: { params: Params }) => {
  const { id } = await params

  const profileResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )

  const profile: Profile = await profileResponse.json()

  const sections = [
    new Section('about', 'O mnie'),
    new Section('experience', 'Doświadczenie'),
    new Section('projects', 'Projekty'),
    new Section('contact', 'Kontakt'),
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
        projects={JSON.parse(JSON.stringify(profile.projects))}
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
