import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, onValue, remove } from 'firebase/database'

export default class FirebaseApp {
	constructor() {
		this.firebaseApp = this.initialize()
		this.database = getDatabase(this.firebaseApp)
		this.dbRef = ref(this.database, 'tasks/')
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

	add(value) {
		push(this.dbRef, value)
	}

	fetch(storeData, setUserData) {
		onValue(this.dbRef, snapshot => {
			const data = snapshot.val()

			if (data) {
				const values = Object.entries(data).map(([key, value]) => ({
					key,
					value,
				}))
				storeData(setUserData, values)
			} else {
				storeData(setUserData, [])
			}
		})
	}

	delete(key) {
		const itemRef = ref(this.database, `tasks/${key}`)
		remove(itemRef)
	}
}
