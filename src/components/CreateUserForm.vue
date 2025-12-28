<script setup lang="ts">
import type { CreateUserFormData } from '@/types/User.type'
import { reactive, toRefs } from 'vue'
import { userApi } from '@/hooks/User.api'

const newUser = reactive<CreateUserFormData>({
  username: '',
  email: '',
  password: '',
  memberType: 'Basic',
})

const { email, memberType, password, username } = toRefs(newUser)
const passwordConfirm = reactive<{ value: string }>({ value: '' })
const isShowError = reactive<{ value: boolean }>({ value: false })

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  if (password.value !== passwordConfirm.value) {
    isShowError.value = true
    return
  }
  isShowError.value = false
  await userApi.createUser(newUser)
}
</script>

<template>
  <h1>Create User Form</h1>
  <form>
    <div>
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" name="username" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" name="email" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" name="password" />
    </div>
    <div>
      <label for="passwordConfirm">Confirm Password:</label>
      <input
        v-model="passwordConfirm.value"
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
      />
    </div>
    <div>
      <label for="memberType">Member Type:</label>
      <select v-model="memberType" id="memberType" name="memberType">
        <option value="Basic">Basic</option>
        <option value="Advance">Advance</option>
        <option value="High">High</option>
      </select>
    </div>
    <button @click="handleSubmit" type="submit">Create User</button>
  </form>

  <div v-if="isShowError.value" style="color: red; margin-top: 1em">
    <ul>
      <h2>Error Messages</h2>
      <li>Passwords do not match.</li>
    </ul>
  </div>
</template>
