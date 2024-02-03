import FirebaseApp from '../firebase/firebase'

export default async function updateCount(key, operation) {
	const firebaseApp = new FirebaseApp()

	try {
		const currentCount = await firebaseApp.fetchData('cart', key)
		let newCount

		if (operation === 'add') {
			newCount = Math.min(currentCount + 1, 100)
		} else if (operation === 'subtract') {
			newCount = Math.max(currentCount - 1, 1)
		} else {
			throw new Error('Invalid operation')
		}

		await firebaseApp.update('cart', key, { count: newCount })
	} catch (error) {
		console.error('Error updating count', error)
	}
}
