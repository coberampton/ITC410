const expect = require('chai').expect
const app = require('../api/server')
const request = require('supertest')

describe('server', () => {

	describe('accounts', () => {
		it('can create an account', () => {
			// The supertest request function returns a promise.
			// Remember that one way to run asynchronous tests
			// is to return a promise.
			return request(app)
				.post('/api/accounts')
				.send({
					username: 'Legolas',
					name: 'Gimli',
					password: 'apassword'
				})
				.expect(201)
		})

		it('can delete an account', () => {
			return request(app)
				.delete('/api/accounts/account-id')
				.send()
				.expect(204)
		})

		it('can login', () => {
			return request(app)
				.put('/api/accounts/account-id/login')
				.send({ password: 'supersecret' })
				.expect(200)
		})

		it('can logout', () => {
			return request(app)
				.put('/api/accounts/account-id/logout')
				.send()
				.expect(200)
		})
	})

    describe('characers', () => {
		it('can get characters', () => {
			return request(app)
				.get('/api/characters')
				.send()
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an('array')
				})
		})

		it('can create a character', () => {
			return request(app)
				.post('/api/characters')
				.send({
					name: "Po",
                    race: "Panda",
                    description: "He is a kung fu panda",
                    favoredAttribute: "Constitution",
                    unfavoredAttribute: "Intelligence"
				})
				.expect(201)
		})
	})
})