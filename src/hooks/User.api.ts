import type { CreateUserFormData, LoginFormData } from '@/types/User.type'

class UserApi {
  login = async (loginFormData: LoginFormData) => {
    const { username, password } = loginFormData
    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
  }

  createUser = async (createUserFormData: CreateUserFormData) => {
    const { username, password, email, memberType } = createUserFormData
    await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, memberType }),
    })
  }
}

export const userApi = new UserApi()
