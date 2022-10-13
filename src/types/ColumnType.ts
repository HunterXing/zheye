export interface ImageProps {
  _id?: string
  url?: string
  createdAt?: string
}

export interface AuthorProps {
  _id: string
  email: string
  nickName: string
  description: string
  avatar: string
  column: string
  createdAt: string
}

export interface ColumnProps {
  _id: string
  title: string
  avatar: ImageProps
  description: string
}

export interface PostProps {
  _id: string
  title: string
  excerpt: string
  content: string
  author: AuthorProps
  image: ImageProps
  column: string
  createdAt: string
}
