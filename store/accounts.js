export const state = () => {
    return {
        user: getUserFromCookie(),
    }
}

export const mutations = {
    setUser (state, user) {
        state.user = user
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
    async delete ({ commit }, {username}) {
        const res = await this.$axios.delete('/api/accounts/' + {username})
        if (res.status ===  204) {
            commit('setUser', null)
        }
    },
    async create ({ commit }, {username, name, password}) {
        const res = await this.$axios.post('/api/accounts', {
            username,
            name,
            password
        })
        return 'created'
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