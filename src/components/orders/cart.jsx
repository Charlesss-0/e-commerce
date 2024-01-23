import styled from 'styled-components'
import { IconsContainer } from '../home/home'
import { useEffect, useState } from 'react'
import FirebaseApp from '../../firebase/firebase'
import { useCart } from '../context/context'

const Container = styled.div`
	background: #fafafa99;
	width: 80vw;
	height: 80vh;
	border-radius: 1rem;
	padding: 1rem;
	backdrop-filter: blur(1rem);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow: auto;
	z-index: 20;

	&::-webkit-scrollbar {
		display: none;
	}
`

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 30;
	overflow: hidden;
	background-color: #000a;
`

export function Cart() {
	const firebaseApp = new FirebaseApp()
	const [count, setCount] = useState(1)
	const [userData, setUserData] = useState([])
	const { hide, setHide } = useCart()

	const handleData = (setData, data) => {
		setData(data)
	}

	useEffect(() => {
		firebaseApp.fetch(handleData, setUserData)
	}, [firebaseApp.database])

	const handleAdd = () => {
		setCount(count => (count < 100 ? count + 1 : 100))
	}

	const handleLess = () => {
		setCount(count => (count > 1 ? count - 1 : 1))
	}

	useEffect(() => {
		document.body.style.overflow = hide ? 'hidden' : 'auto'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [hide])

	return (
		<Overlay className={hide ? 'block' : 'hidden'}>
			<Container className={hide ? 'block' : 'hidden'}>
				<h1
					className="text-end px-[1rem] mb-[1rem] hover:cursor-pointer"
					onClick={() => setHide(!hide)}
				>
					Close
				</h1>
				<ul className="flex flex-col gap-[1rem]">
					{userData.map(({ key, value }) => (
						<li
							key={key}
							className="
							flex 
							justify-between 
							items-center 
							p-[0.8rem] 
							rounded-[0.5rem] 
							bg-[#efefef] 
							box-shadow
							"
						>
							<div className="flex gap-[1rem] text-[0.8rem] [&>img]:w-[100px] [&>img]:rounded-[0.3rem] [&>img]:border-solid [&>img]:border-2 [&>img]:border-[#aaa]">
								<img src={value.img} />
								<div className="flex flex-col justify-between">
									<div>
										<p>{value.details}</p>
										<p>{value.price}</p>
									</div>
									<IconsContainer>
										<i className="fi fi-rr-heart"></i>
									</IconsContainer>
								</div>
							</div>

							<div className="flex gap-[3rem] items-center px-[1rem]">
								<div className="flex items-center gap-[1rem] [&>i]:hover:cursor-pointer">
									<i className="fi fi-rr-minus-circle" onClick={handleLess}></i>
									<p className="select-none text-center w-[40px]">{count}</p>
									<i className="fi fi-rr-add" onClick={handleAdd}></i>
								</div>
								<i
									className="fi fi-rr-trash hover:cursor-pointer"
									onClick={() => firebaseApp.delete(key)}
								></i>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</Overlay>
	)
}
