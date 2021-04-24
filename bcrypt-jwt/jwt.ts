import {sign as makeToken, verify as decryptToken} from 'jsonwebtoken'
// `npm i jsonwebtoken`

const main = async () => {
	const SECRET = 'some secret from .env file' // 10 is ok.
	const username = {username: 'sahilrajput03'}
	const token = await makeToken(username, SECRET)
	console.log('tokenized username:')
	console.log(token) // Output(changes on every execution): $2b$10$XLP4wLlXgILaXNOWJiJU6uusly/LQnl4DOe.cw3Eon003LQ0RWY/q

	console.log('\nCorrect token test:')
	let fetched_username = await decryptToken(token, SECRET)
	console.log(fetched_username) // Output: true
	console.log('Note: the iat means time at which token was issued at.')

	console.log('\nBad token test:')
	try {
		fetched_username = await decryptToken('any bod text', SECRET)
	} catch (error) {
		console.log('ERROR: Decrypting token failed.')
	}
}

main()
