<template>
  <div>
    <!-- <v-btn @click="load()">Load</v-btn>

    <div>
      <input v-model="text" placeholder="To do item to add">
    </div>

    <v-btn @click="addItem()">Click Me</v-btn>

    <ul>
      <li v-for="item in list" :key="item.text">
        {{item.text}}
      </li>
    </ul> -->
    <div :style="{color: 'white'}" v-if="user == null">
      <Pass-Off myText="InputText" @updateLength="length = $event"></Pass-Off>
      {{length}}
    </div>

    <h1 v-if="user == null">Authentication</h1>
    <div v-if="user == null">
      <input :style="{color: 'white'}" v-model="username" placeholder="Username">
      <input :style="{color: 'white'}" v-model="password" placeholder="Password">
    </div>
    <!-- <v-btn v-if="user == null" @click="create()">Create Account</v-btn> -->
    <v-btn v-if="user == null" @click="login()">Log In</v-btn>
    <v-btn v-if="user == null" to="/create">Create An Account</v-btn>
    <!-- <v-btn  @click="Logout()">Log Out</v-btn> -->

    <div v-if="user !== null">
      Logged in as {{user}}
      <p>Put in your username to delete account</p>
      <input :style="{color: 'white'}" v-model="username" placeholder="Username">
    </div>
    <v-btn v-if="user !== null" @click="deleteAccount()">Delete Account</v-btn>

  </div>
</template>

<script>
import PassOff from '~/components/pass-off.vue'
export default {
  name: 'IndexPage',
  data () {
    return {
      text: '',
      length: 0,
      username: '',
      password: ''
    }
  },
  methods: {
    addItem () {
      this.$store.commit('todo/add', this.text)
      this.text = ''
    },
    load () {
      this.$store.dispatch('todo/getList')
    },
    login () {
      this.$store.dispatch('accounts/login', {
        username: this.username,
        password: this.password
      })
    },
    logout () {
      this.$store.dispatch('accounts/logout')
    },
    async deleteAccount () {
      this.$store.dispatch('accounts/delete', {
        username: this.username
      })
    }
  },
  computed: {
    list () {
      return this.$store.state.todo.list
    },
    user () {
      return this.$store.state.accounts.user
    },
    Loggedin () {
      return this.$store.getters.todo.Loggedin
    }
  },
  components: {
    PassOff
  }
}
</script>
