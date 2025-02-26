import prisma from '@/lib/prisma'
import {NextResponse} from "next/server";
import {DateRange, Experience, Link, Profile, Project} from "@/models";
import {LinkType} from "@/models/Profile";

type Params = {
  id: string
}

export async function GET(
  req: Request,
  { params }: { params: Params }
) {
  const { id } = await params

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      projects: {
        include: {
          github_links: true,
          badges: {
            include: {
              Badges: {
                select: {
                  name: true,
                  color: true,
                }
              }
            }
          },
          presentation: true,
        },
      },
      user_experience: {
        include: {
          badges: {
            include: {
              Badges: {
                select: {
                  name: true,
                  color: true,
                }
              }
            }
          },
        }
      },
      social_media: true,
    }
  })

  if (!user) {
    return new Response('Not found', {status: 404})
  }

  const profile = new Profile(
    user.first_name,
    user.last_name,
    user.name,
    user.description,
    {
      linkedin: user.social_media.find(sm => sm.name === 'linkedin')?.url || '',
      github: user.social_media.find(sm => sm.name === 'github')?.url || '',
      mail: user.social_media.find(sm => sm.name === 'mail')?.url || '',
    },
    user.main_color,
    user.about,
    user.image || '',
    user.user_experience.map(ue => new Experience(
      ue.company,
      new DateRange(
        ue.from,
        ue.to,
      ),
      ue.role,
      ue.logo || '',
      ue.description,
      ue.badges.map(b => ({
        name: b.Badges?.name || '',
        color: b.Badges?.color || '',
      })),
    )),
    user.projects.map(p => new Project(
      p.title,
      p.image,
      p.description,
      p.project_link,
      p.github_links.map(gl => {
        const name = gl.type.charAt(0).toUpperCase() + gl.type.slice(1)
        return new Link(
          name,
          gl.url,
          gl.type as LinkType
        )
      }),
      p.badges.map(b => ({
        name: b.Badges?.name || '',
        color: b.Badges?.color || '',
      })),
      p.presentation,
    )),
  )

  return NextResponse.json(profile)
}
