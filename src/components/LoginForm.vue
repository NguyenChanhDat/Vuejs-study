<script setup lang="ts">
import { ref } from 'vue'

type LoginFormData = {
  username: string
  password: string
}

const userInformation = ref<LoginFormData>({
  username: '',
  password: '',
})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  console.log('Username:', userInformation.value.username)
  console.log('Password:', userInformation.value.password)
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
