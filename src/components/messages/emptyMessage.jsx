export default function EmptyMessage({ children }) {
	return (
		<h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] select-none">
			{children}
		</h1>
	)
}
