<template>
  <div>

    <h1>Create an account</h1>
    <div v-if="user == null">
      <input :style="{color: 'white'}" v-model="username" placeholder="Username">
      <input :style="{color: 'white'}" v-model="name" placeholder="name">
      <input :style="{color: 'white'}" v-model="password" placeholder="Password">
    </div>
    <v-btn v-if="user == null" @click="create()">Create Account</v-btn>
    <v-btn v-if="user == null" to="/">Home Page</v-btn>

  </div>
</template>

<script>
export default {
  name: 'create',
  data () {
    return {
      text: '',
      username: '',
      name: '',
      password: ''
    }
  },
  methods: {
    async create () {
      const success = await this.$store.dispatch('accounts/create', {
        username: this.username,
        name: this.name,
        password: this.password
      })
      if (success === 'created') {
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