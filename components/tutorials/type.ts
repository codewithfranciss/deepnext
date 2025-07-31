export type Level = "Beginner" | "Intermediate" | "Advanced" | string

export interface Tutorial {
  id?: string
  title: string
  description: string
  author: string
  duration: string
  rating: number | string
  tags: string[]
  level: Level
}
