import characters from '~/api/controllers/characters'

const bcrypt = require('bcryptjs')

export const state = () => {
    return {
        user: getUserFromCookie(),
        characters: []
    }
}

export const mutations = {
    setUser (state, user) {
        state.user = user
    },
    setCharacters (state, characters) {
        state.characters = characters
    }
}

export const actions = {
    async login ({ commit, state }, { username, password }) {
        const res = await this.$axios.put('/api/authentication/login', {
            username,
            password
        })
        if (res.status === 200) {
            commit('setUser', getUserFromCookie())
        }
    },

    async logout ({ commit }) {
        const res = await this.$axios.put('/api/authentication/logout')
        if (res.status === 200) {
            commit('setUser', null)
        }
    },
    async delete ({ commit }, {delUsername}) {
        const res = await this.$axios.delete('/api/accounts/' + delUsername)
        if (res.status ===  204) {
            commit('setUser', null)
            return 'deleted'
        }
    },
    async create ({ commit }, {username, name, password}) {
        const res = await this.$axios.post('/api/accounts', {
            username,
            name,
            password
        })
        return 'created'
    },
    async createcharacter ({ commit }, {name, race, description, favoredAttribute, unfavoredAttribute, username}) {
        console.log('first step')
        const res = await this.$axios.post('/api/characters', {
            name,
            race,
            description,
            favoredAttribute,
            unfavoredAttribute,
            username
        })
        if (res.status === 201) {
            return 'created'
        }
        else {
            return 'error'
        }
    },
    async getCharacters( {commit}) {
        const res = await this.$axios.get('api/characters')
        if (res.status === 200) {
            commit('setCharacters', res.data)
        }
      },

    async deletecharacter ({ commit }, {name, username}) {
        
    },
    async update ({ commit }, {username, name, password}) {
        const newPassword = await encryptPassword(password)
        const res = await this.$axios.patch('/api/accounts/' + username, {
            username,
            name,
            newPassword
        })
        if (res.status ===  200) {
            return 'updated'
        }
    }
}

// Check if the user cookie is set and if so get the cookie value.
// This cookie is set in addition to the session cookie when the user
// authenticated, but this cookie is made accessible to the browser's
// JavaScript.
function getUserFromCookie () {
    const re = new RegExp("user=([^;]+)") 
    const value = re.exec(document.cookie)
    return value != null ? unescape(value[1]) : null
}

function getCharacters () {

}

async function encryptPassword (password) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}