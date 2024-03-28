export interface Customer {
  avatar?: string
  name: string
  email: string
  password: string
  token: string
  role: 1
  createdAt: string
  updatedAt: string
  profile?: Profile
}

export interface Profile {
  _id?: string
  firstName?: string
  lastName?: string
  emailContact?: string
  phone?: string
  sex?: number
  avatar?: string
}
