import type { JournalEntry, Project, Service } from "../types/portfolio"

export const image = (url: string, width = 1800) =>
  url.replace(/w=\d+/, `w=${width}`)

export const projects: Project[] = [
  {
    title: "After Hours",
    slug: "after-hours",
    category: "Editorial Photography",
    year: "2026",
    location: "Lagos, Nigeria",
    coverImage: image(
      "https://images.unsplash.com/photo-1704208316515-a32f81e373ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
    ),
    galleryImages: [
      image(
        "https://images.unsplash.com/photo-1612902217843-8a46cb7c5d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1673447067622-bbc8a34e2c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1707011017057-e80acf66ddeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
    ],
    description:
      "A study in poise after dark—quiet gestures, sculpted light and the charged atmosphere between one moment and the next.",
    client: "Editorial study",
    credits: "Creative direction and image-making by MAXMO",
  },
  {
    title: "Still / Moving",
    slug: "still-moving",
    category: "Cinematography · Campaign",
    year: "2026",
    location: "Lagos, Nigeria",
    coverImage: image(
      "https://images.unsplash.com/photo-1790065583660-72b57fb04f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
    ),
    galleryImages: [
      image(
        "https://images.unsplash.com/photo-1790065478511-9b5fc83436d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1666974931330-9b5bcc541347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1573662766191-066ba9570a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
    ],
    description:
      "Movement and stillness share the frame in an image-led campaign about self-possession, texture and rhythm.",
    client: "Campaign concept",
    credits: "Film and photography by MAXMO",
  },
  {
    title: "Between Light",
    slug: "between-light",
    category: "Portraits · Photography",
    year: "2026",
    location: "Nigeria",
    coverImage: image(
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
    ),
    galleryImages: [
      image(
        "https://images.unsplash.com/photo-1593351799227-75df2026356b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1605119622209-706805d19a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1536960495701-78905c1f6c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
    ],
    description:
      "An intimate portrait series shaped by natural light, personal detail and the honesty of an unguarded gaze.",
    client: "Personal series",
    credits: "Portraiture by MAXMO",
  },
  {
    title: "Form & Motion",
    slug: "form-and-motion",
    category: "Fashion · Film",
    year: "2026",
    location: "West Africa",
    coverImage: image(
      "https://images.unsplash.com/photo-1720010941838-56ebd080bc45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
    ),
    galleryImages: [
      image(
        "https://images.unsplash.com/photo-1741128632672-94469027c88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1708170236295-20ab8fbadcef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1784639105245-457d4e761a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
    ],
    description:
      "A fashion film told through silhouette, fabric and bodies in motion—each frame composed to stand on its own.",
    client: "Fashion film study",
    credits: "Visual direction by MAXMO",
  },
  {
    title: "The City Within",
    slug: "the-city-within",
    category: "Documentary · Photography",
    year: "2026",
    location: "Lagos, Nigeria",
    coverImage: image(
      "https://images.unsplash.com/photo-1785094165599-7fe887d264d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
    ),
    galleryImages: [
      image(
        "https://images.unsplash.com/photo-1574612357719-5dd0a272afe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1661332628309-094b283d0edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
      image(
        "https://images.unsplash.com/photo-1693936184553-3d4030fa5386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
      ),
    ],
    description:
      "A visual diary of the city as lived rather than observed: movement, architecture and everyday histories in collision.",
    client: "Documentary study",
    credits: "Photography by MAXMO",
  },
]

export const journalEntries: JournalEntry[] = [
  {
    title: "The Light We Chase",
    slug: "the-light-we-chase",
    category: "Visual Diaries",
    date: "18.02.26",
    coverImage: projects[2].galleryImages[0],
    body: "Light is never simply illumination. It creates the emotional temperature of an image, tells us where to look, and makes the everyday feel briefly unfamiliar.",
    gallery: [projects[2].coverImage, projects[2].galleryImages[2]],
  },
  {
    title: "Building a Cinematic Portrait",
    slug: "building-a-cinematic-portrait",
    category: "Behind the Frame",
    date: "04.02.26",
    coverImage: projects[0].galleryImages[0],
    body: "A cinematic portrait begins before the camera moves. We think in scenes: a gesture, a texture, a quality of silence and the world that exists just outside the frame.",
    gallery: [projects[0].coverImage, projects[0].galleryImages[1]],
  },
  {
    title: "From Still to Motion",
    slug: "from-still-to-motion",
    category: "Film Notes",
    date: "21.01.26",
    coverImage: projects[1].galleryImages[0],
    body: "Still and moving images ask different things of time. Our process searches for the visual language that can live naturally in both.",
    gallery: [projects[1].coverImage, projects[3].galleryImages[2]],
  },
]

export const services: Service[] = [
  {
    title: "Photography",
    description:
      "Portraits, editorial, fashion, lifestyle, events and commercial image-making.",
  },
  {
    title: "Cinematography",
    description:
      "Films, campaigns, music visuals, brand stories and documentary.",
  },
  {
    title: "Visual Direction",
    description:
      "Creative direction and image systems built around one clear point of view.",
  },
]
