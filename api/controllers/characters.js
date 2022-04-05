const characters = require('../database/character')
const accounts = require('../database/account')

module.exports = function (pool) {
    return {
        async createCharacter (req, res) {
            const data = req.enforcer.body
            const { username } = req.enforcer.params
            const testname = 'test'
            console.log('username'+ username)
            const client = await pool.connect()
            try {
				await client.query('BEGIN')
				let account = await accounts.getAccountByUsername(client, testname)
				if (account === undefined) {
					res.enforcer.status(404).send()
				} else if (account.account_id !== req.user.id) {
					res.enforcer.status(403).send()
				} else {
					await characters.createCharacter(pool, account.account_id, data) //formerly req.user.id
					console.log('created')
                    res.enforcer.status(201).send({data})
				}
                await client.query('COMMIT')
            } catch (e) {
                await client.query('ROLLBACK')
				throw e
            } finally {
                client.release()
            }
            //let account = await accounts.getAccountByUsername(client, username)
        },

        async getCharacters (req, res) {

        },
        
        async updateCharacter (req, res) {

        },
        
        async deleteCharacter (req, res) {

        },
        
        async uploadFile (req, res) {

        },
        
        async downloadFile (req, res) {

        },
        
        async deleteFile (req, res) {

        }
    }
}