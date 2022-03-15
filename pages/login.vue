<template>
  <div>

    <h1>Authentication</h1>
    <div v-if="user == null">
      <input :style="{color: 'white'}" v-model="username" placeholder="Username">
      <input :style="{color: 'white'}" v-model:="password" placeholder="Password">
    </div>
    <v-btn @click="login()">Log In</v-btn>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('accounts/login', {
        username: this.username,
        password: this.password
      })
    },
    logout () {
      this.$store.dispatch('accounts/logout')
    }
  },
  computed: {
    user () {
      return this.$store.state.accounts.user
    }
  }
}
</script>