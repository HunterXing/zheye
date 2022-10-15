interface avatarProps {
  url: string
  _id: string
}

export default interface UserType {
  _id?: string
  email: string
  password?: string
  nickName?: string
  descript?: string
  avatar?: avatarProps
  column?: string
  createdAt?: string
}
