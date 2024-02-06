export default async function updateCount(firebaseApp, key, operation) {
	try {
		const currentCount = await firebaseApp.fetchToUpdate('cart', key)
		let newCount

		if (!isNaN(currentCount)) {
			if (operation === 'add') {
				newCount = Math.min(currentCount + 1, 100)
			} else if (operation === 'subtract') {
				newCount = Math.max(currentCount - 1, 1)
			} else {
				throw new Error('Invalid operation')
			}
		} else {
			console.error('Invalid currentCount:', currentCount)
			return
		}

		await firebaseApp.update('cart', key, { count: newCount })
	} catch (error) {
		console.error('Error updating count', error)
	}
}
