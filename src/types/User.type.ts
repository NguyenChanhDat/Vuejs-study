export type LoginFormData = {
  username: string
  password: string
}

export type CreateUserFormData = {
  username: string
  password: string
  email: string
  memberType: MemberType
}

const MemberType = {
  Basic: 'Basic',
  Advance: 'Advance',
  High: 'High',
} as const

export type MemberType = (typeof MemberType)[keyof typeof MemberType]
