type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Palm Beach 🌴',
    description:
      'Palm Beach American Diner is a fast-food vaporwave restaurant. The website was built in Svelte.',
    link: 'https://www.palmbeach-restaurant.com/',
    video:
      'https://res.cloudinary.com/dnehrbovy/video/upload/v1747758201/wxftxdege2mij0xoxuao.mp4',
    id: 'project1',
  },
  {
    name: 'Cuprate',
    description: 'Cuprate is a Monero node in Rust 🦀.',
    link: 'https://github.com/cuprate/cuprate',
    video:
      'https://res.cloudinary.com/doq6y2pbs/video/upload/v1746729183/PixelTaken_Video_2025-05-08_20-31-19_hvbheq.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'KPMG',
    title: 'Senior Analyst Software Engineer',
    start: '05.2024',
    end: '09.2024',
    link: 'https://www.kpmg.com/',
    id: 'work3',
  },
  {
    company: 'Capgemini',
    title: '.NET Consultant',
    start: '09.2019',
    end: '07.2024',
    link: 'https://capgemini.com',
    id: 'work2',
  },
  {
    company: 'Barco',
    title: 'Software Engineer',
    start: '01.2018',
    end: '06/2018',
    link: 'https://barco.com',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Contributing to Open Source projects. Why is it Important ?',
    description: 'Open Source has become a cornerstone if you want to improve your skills.',
    link: '/blog/contributing-to-open-source-why-it-is-important',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/oochenn',
  },
  {
    label: 'X',
    link: 'https://x.com/oochennn',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oussamameziani',
  },
  {
    label: 'Resume',
    link: '/assets/resume.pdf',
  },
]

export const EMAIL = 'oussamameziani@protonmail.com'
