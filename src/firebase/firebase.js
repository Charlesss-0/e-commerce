import { initializeApp } from 'firebase/app'
import {
	getDatabase,
	ref,
	push,
	onValue,
	remove,
	update,
} from 'firebase/database'

export default class FirebaseApp {
	constructor() {
		this.firebaseApp = this.initialize()
		this.database = getDatabase(this.firebaseApp)
	}

	initialize() {
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

	add(value, reference) {
		const dbRef = ref(this.database, `${reference}/`)
		push(dbRef, value)
	}

	fetchAndSet(setData, reference) {
		return new Promise((resolve, reject) => {
			const dbRef = ref(this.database, `${reference}`)
			onValue(
				dbRef,
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
					reject(error)
				}
			)
		})
	}

	fetchData(reference, key) {
		return new Promise((resolve, reject) => {
			const dbRef = ref(this.database, `${reference}/${key}`)

			onValue(dbRef, snapshot => {
				const data = snapshot.val()?.count || 0
				resolve(data)
			}),
				error => {
					reject(error)
				}
		})
	}

	delete(key, reference) {
		const itemRef = ref(this.database, `${reference}/${key}`)
		remove(itemRef)
	}

	update(reference, key, updatedData) {
		const itemRef = ref(this.database, `${reference}/${key}`)

		update(itemRef, updatedData)
	}
}
