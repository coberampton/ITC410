<template>
  <div>

    <h1>Create a Character</h1>
    <div v-if="user != null">
      <input :style="{color: 'white'}" v-model="name" placeholder="Name">
      <input :style="{color: 'white'}" v-model="race" placeholder="Race">
      <input :style="{color: 'white'}" v-model="description" placeholder="Description">
      <input :style="{color: 'white'}" v-model="favored" placeholder="Favored">
      <input :style="{color: 'white'}" v-model="unfavored" placeholder="Unfavored">
      <input :style="{color: 'white'}" v-model="username" placeholder="Username">
    </div>
    <v-btn v-if="user !== null" @click="createcharacter()">Create character</v-btn>
    <v-btn v-if="user !== null" to="/">Home Page</v-btn>

  </div>
</template>

<script>
export default {
  name: 'createcharacter',
  data () {
    return {
      text: '',
      username: '',
      name: '',
      password: '',
      race: '',
      description: '',
      favored: '',
      unfavored: ''
    }
  },
  methods: {
    async createcharacter () {
      const success = await this.$store.dispatch('accounts/createcharacter', {
        name: this.name,
        race: this.race,
        description: this.description,
        favoredAttribute: this.favored,
        unfavoredAttribute: this.unfavored,
        username: this.username
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