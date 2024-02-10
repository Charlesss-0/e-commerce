import { Footer, HeaderContent } from '../components'

import { Outlet } from 'react-router-dom'
import moonlight from '../assets/moonlight.svg'
import styled from 'styled-components'

const AboutContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default function AboutPage() {
	return (
		<>
			<HeaderContent />
			<AboutContainer>
				<div className="bg-[#12372A] rounded-[1rem] text-white mt-[13rem] py-[2rem] px-[5rem] w-[90%]">
					<div className="grid gap-[1rem] grid-cols-2 py-[2rem]">
						<div className="flex flex-col justify-between">
							<h1 className="text-[2rem] font-bold">About GC</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Magna ac placerat vestibulum lectus mauris. Tincidunt arcu non
								sodales neque. Eget dolor morbi non arcu risus. Dictumst
								vestibulum rhoncus est pellentesque elit. Sed enim ut sem
								viverra. Imperdiet massa tincidunt nunc pulvinar sapien et.
								Tortor posuere ac ut consequat semper viverra nam libero justo.
							</p>
						</div>

						<img src={moonlight} className="rounded-[1rem]" />
					</div>
				</div>
			</AboutContainer>
			<Footer />
			<Outlet />
		</>
	)
}
