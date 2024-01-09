import styled from 'styled-components'
import { IconsContainer } from '../home/home'
import { useEffect, useState } from 'react'

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
	z-index: 20;
`

export function Cart() {
	const [count, setCount] = useState(1)

	const handleAdd = () => {
		setCount(count => (count < 100 ? count + 1 : 100))
	}

	const handleLess = () => {
		setCount(count => (count > 1 ? count - 1 : 1))
	}

	return (
		<Container>
			<div>
				<ul>
					<li className="flex justify-between items-center p-[0.8rem] rounded-[0.5rem] bg-[#efefef] box-shadow">
						<div className="flex gap-[1rem] text-[0.8rem] [&>img]:w-[100px] [&>img]:rounded-[0.3rem] [&>img]:border-solid [&>img]:border-2 [&>img]:border-[#aaa]">
							<img src="https://th.bing.com/th/id/OIG.1SJeQuTu6P9JcUD832cX?w=1024&h=1024&rs=1&pid=ImgDetMain" />
							<div className="flex flex-col justify-between">
								<div>
									<p>Lorem Ipsum</p>
									<p>$ 100</p>
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
							<i className="fi fi-rr-trash"></i>
						</div>
					</li>
				</ul>
			</div>
		</Container>
	)
}
