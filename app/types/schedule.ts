export interface Option {
  label: string
  value: string
}

export interface Teacher {
  name: string
  email: string
}

export interface StaffMember {
  id: number
  registered: 'yes' | 'no'
  name: string
  email: string
}
