<script setup lang="ts">
import type { LoginFormData } from '@/types/User.type'
import { ref } from 'vue'
import { userApi } from '@/hooks/User.api'

const userInformation = ref<LoginFormData>({
  username: '',
  password: '',
})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  userApi.login(userInformation.value)
}
</script>

<template>
  <h1>Login Form</h1>
  <form>
    <div>
      <label for="username">Username:</label>
      <input v-model="userInformation.username" type="text" id="username" name="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input v-model="userInformation.password" type="password" id="password" name="password" />
    </div>
    <button @click="handleSubmit" type="submit">Login</button>
  </form>
</template>
