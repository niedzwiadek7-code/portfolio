import {DateRange} from "@/models/DateRange";

export class Section {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

export class Badge {
  name: string
  color: string

  constructor(name: string, color: string) {
    this.name = name
    this.color = color
  }
}

export type LinkType = 'frontend' | 'backend' | 'docs'

export class Link {
  type: LinkType
  name: string
  url: string

  constructor(name: string, url: string, type: LinkType) {
    this.name = name
    this.url = url
    this.type = type
  }
}

export class Project {
  name: string
  image: string
  description: string
  projectLink: string
  githubLinks: Link[]
  badges: Badge[]

  constructor(
    name: string,
    image: string,
    description: string,
    projectLink: string,
    githubLinks: Link[],
    badges: Badge[]
  ) {
    this.name = name
    this.image = image
    this.description = description
    this.projectLink = projectLink
    this.githubLinks = githubLinks
    this.badges = badges
  }
}

export class Experience {
  title: string
  dateRange: DateRange
  role: string
  logo: string
  description: string
  badges: Badge[]

  constructor(
    title: string,
    dateRange: DateRange,
    role: string,
    logo: string,
    description: string,
    badges: Badge[]
  ) {
    this.title = title
    this.dateRange = dateRange
    this.role = role
    this.logo = logo
    this.description = description
    this.badges = badges
  }
}

export class SocialMedia {
  linkedin: string
  github: string
  mail: string

  constructor(
    linkedin: string,
    github: string,
    mail: string
  ) {
    this.linkedin = linkedin
    this.github = github
    this.mail = mail
  }
}

export class Profile {
  firstName: string
  lastName: string
  name: string
  headerRole: string
  headerDesc: string
  about: string
  image: string

  socialMedia: SocialMedia
  experience: Experience[]
  projects: Project[]

  mainColor: string

  constructor(
    firstName: string,
    lastName: string,
    headerRole: string,
    headerDesc: string,
    socialMedia: SocialMedia,
    color: string,
    about: string,
    image: string,
    experience: Experience[],
    projects: Project[]
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.name = `${firstName} ${lastName}`
    this.headerRole = headerRole
    this.headerDesc = headerDesc
    this.socialMedia = socialMedia
    this.mainColor = color
    this.about = about
    this.image = image
    this.experience = experience.sort((a, b) => b.dateRange.start.getDate() - a.dateRange.start.getDate())
    this.projects = projects
  }
}
