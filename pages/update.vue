<template>
  <div>

    <h1>Update your account</h1>
    <p>You must include information that will not change as well! You cannot change your username!</p>
    <div v-if="user !== null">
      <input :style="{color: 'white'}" v-model="username" placeholder="Username">
      <input :style="{color: 'white'}" v-model="name" placeholder="name">
      <input :style="{color: 'white'}" v-model="password" placeholder="Password">
    </div>
    <v-btn v-if="user !== null" @click="update()">Update Account</v-btn>
    <v-btn v-if="user !== null" to="/">Home Page</v-btn>

  </div>
</template>

<script>
export default {
  name: 'update',
  data () {
    return {
      text: '',
      username: '',
      name: '',
      password: ''
    }
  },
  methods: {
    async update () {
      const success = await this.$store.dispatch('accounts/update', {
        username: this.username,
        name: this.name,
        password: this.password
      })
      if (success === 'updated') {
        this.$store.dispatch('accounts/logout')
        this.$store.dispatch('accounts/login', {
        username: this.username,
        password: this.password
      })
        this.$router.push('/')
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.accounts.user
    }
  }
}
</script>