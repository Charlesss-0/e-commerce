import FirebaseApp from '../firebase/firebase'
const firebaseApp = new FirebaseApp()

export async function fetchData(setIsLoading, setData, ref) {
	try {
		setIsLoading(true)

		await firebaseApp.fetchAndSet(setData, ref)

		setIsLoading(false)
	} catch (error) {
		console.error('Error fetching data', error)
		setIsLoading(false)
	}
}
