import {
	browserLocalPersistence,
	getAuth,
	GoogleAuthProvider,
	setPersistence,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import {
	equalTo,
	get,
	getDatabase,
	onValue,
	orderByChild,
	push,
	query,
	ref,
	remove,
	update,
} from 'firebase/database'
import { initializeApp } from 'firebase/app'

class FirebaseApp {
	constructor() {
		this.initialize = this.initializeFirebase()
		this.database = getDatabase()
		this.auth = getAuth()
		this.provider = new GoogleAuthProvider()
		this.currentUser = null
		this.init()
	}

	initializeFirebase() {
		return initializeApp({
			apiKey: 'AIzaSyAiT-J9wqX92GJFWPMSxebdCEM1xCFyIz0',
			authDomain: 'e-commerce-ba9e2.firebaseapp.com',
			databaseURL: 'https://e-commerce-ba9e2-default-rtdb.firebaseio.com',
			projectId: 'e-commerce-ba9e2',
			storageBucket: 'e-commerce-ba9e2.appspot.com',
			messagingSenderId: '684968939650',
			appId: '1:684968939650:web:b800b40fbed2857c8b649b',
		})
	}

	async signInWithGoogle() {
		try {
			await setPersistence(this.auth, browserLocalPersistence)
			const result = await signInWithPopup(this.auth, this.provider)
			return result.user
		} catch (error) {
			throw new Error(error)
		}
	}

	async signOut() {
		try {
			await signOut(this.auth)
			return []
		} catch (error) {
			throw new Error(error)
		}
	}

	init() {
		return new Promise(resolve => {
			const unsubscribe = this.auth.onAuthStateChanged(user => {
				this.currentUser = user
				resolve()
			})

			return unsubscribe
		})
	}

	async add(value, reference) {
		const dbRef = ref(
			this.database,
			`${reference}/${this.auth.currentUser.uid}`
		)

		try {
			value.uid = this.auth.currentUser.uid

			const nodeQuery = query(dbRef, orderByChild('img'))
			const snapshot = await get(nodeQuery)

			const data = snapshot.val() || {}
			const idExists = Object.values(data).some(item => item.img === value.img)

			if (!idExists) {
				push(dbRef, value)
			} else {
				console.warn('ID already exists')
				return
			}
		} catch (error) {
			console.error('Error adding data:', error)
		}
	}

	async fetchAndSet(setData, reference) {
		await this.init()

		return new Promise((resolve, reject) => {
			if (this.currentUser) {
				const dbRef = ref(this.database, `${reference}/${this.currentUser.uid}`)
				const userRef = query(
					dbRef,
					orderByChild('uid'),
					equalTo(this.currentUser.uid)
				)

				onValue(
					userRef,
					snapshot => {
						const data = snapshot.val()

						if (data) {
							const result = Object.entries(data).map(([key, value]) => ({
								key,
								value,
							}))

							setData(result)
							resolve(result)
						} else {
							setData([])
							resolve([])
						}
					},
					error => {
						console.log('Error in onValue:', error)
						reject(error)
					}
				)
			} else {
				setData([])
				console.error('No user authenticated')
				reject()
			}
		})
	}

	fetchToUpdate(reference, key) {
		return new Promise((resolve, reject) => {
			const dbRef = ref(
				this.database,
				`${reference}/${this.currentUser.uid}/${key}`
			)

			if (this.currentUser) {
				onValue(
					dbRef,
					snapshot => {
						const data = snapshot.val()
						const count = data?.count

						if (!isNaN(count)) {
							resolve(count)
						} else {
							console.error('Invalid count in fetchToUpdate:', count)
							resolve(null)
						}
					},
					error => {
						reject(error)
					}
				)
			} else {
				console.error('No user authenticated')
				resolve(null)
			}
		})
	}

	delete(key, reference) {
		const itemRef = ref(
			this.database,
			`${reference}/${this.currentUser.uid}/${key}`
		)
		remove(itemRef)
	}

	async update(reference, key, updatedData) {
		try {
			const itemRef = ref(
				this.database,
				`${reference}/${this.currentUser.uid}/${key}`
			)
			await update(itemRef, updatedData)
		} catch (error) {
			console.error('Error updating data:', error)
		}
	}
}

export default FirebaseApp
