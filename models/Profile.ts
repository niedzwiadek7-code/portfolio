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

  socialMedia: SocialMedia

  mainColor: string

  constructor(
    name: string,
    headerName: string,
    headerRole: string,
    headerDesc: string,
    socialMedia: SocialMedia,
    color: string
  ) {
    this.name = name
    this.headerName = headerName
    this.headerRole = headerRole
    this.headerDesc = headerDesc
    this.socialMedia = socialMedia
    this.mainColor = color
  }
}
