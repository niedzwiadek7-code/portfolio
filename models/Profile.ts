import {DateRange} from "@/models/DateRange";

export class Badge {
  name: string
  color: string

  constructor(name: string, color: string) {
    this.name = name
    this.color = color
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

  constructor(linkedin: string, github: string) {
    this.linkedin = linkedin
    this.github = github
  }
}

export class Profile {
  name: string
  headerName: string
  headerRole: string
  headerDesc: string
  about: string
  image: string

  socialMedia: SocialMedia
  experience: Experience[]

  mainColor: string

  constructor(
    name: string,
    headerName: string,
    headerRole: string,
    headerDesc: string,
    socialMedia: SocialMedia,
    color: string,
    about: string,
    image: string,
    experience: Experience[]
  ) {
    this.name = name
    this.headerName = headerName
    this.headerRole = headerRole
    this.headerDesc = headerDesc
    this.socialMedia = socialMedia
    this.mainColor = color
    this.about = about
    this.image = image
    this.experience = experience.sort((a, b) => b.dateRange.start.getDate() - a.dateRange.start.getDate())
  }
}
