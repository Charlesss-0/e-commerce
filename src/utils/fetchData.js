import FirebaseApp from '../firebase/firebase'

export default async function fetchData(setIsLoading, setData, ref) {
	const firebaseApp = new FirebaseApp()

	try {
		setIsLoading(true)

		await firebaseApp.fetchAndSet(setData, ref)

		setIsLoading(false)
	} catch (error) {
		console.error('Error fetching data', error)
		setIsLoading(false)
	}
}
