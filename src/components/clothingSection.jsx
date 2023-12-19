import { storeProducts } from '../data/data'

export default function ClothingSection() {
	return (
		<div>
			<div className="w-full flex justify-center items-center [&>div]:border-solid [&>div]:border-b [&>div]:border-black [&>div]:w-[5rem]">
				<div></div>
				<h1 className="text-[1.5rem] m-[1rem] my-[2rem]">New Arrivals</h1>
				<div></div>
			</div>

			<ClothingItem items={storeProducts.sweaters} />
			<ClothingItem items={storeProducts.hoodies} />
		</div>
	)
}

function ClothingItem({ items }) {
	return (
		<div className="flex justify-evenly mb-[1rem]">
			{items.map(item => (
				<div key={item.id} className="flex items-center">
					<div className="text-center">
						<div
							className="
                            overflow-hidden 
                            w-[200px] 
                            h-[220px] 
                            m-[1rem] 
                            rounded-lg 
                            shadow-lg
                            hover:cursor-pointer
							hover:child-flex
							relative

                            "
						>
							<img
								src={item.img}
								alt={item.title}
								className="
									w-full
									h-full
									hover:scale-105 
									transition-all 
									duration-300
								"
							/>
							<div
								className="
									gap-[1rem] 
									absolute 
									bottom-0 
									left-[50%] 
									translate-x-[-50%] 
									mb-[0.5rem] 
									hidden
									[&>i]:shadow-md 
									[&>i]:bg-[#efefef] 
									[&>i]:p-[0.5rem] 
									[&>i]:rounded-lg
									"
							>
								<i className="fi fi-rr-heart hover:opacity-[0.9]"></i>
								<i className="fi fi-rr-plus hover:opacity-[0.9]"></i>
							</div>
						</div>
						<h1 className="mb-[0.5rem]">Lorem ipsum sir amet</h1>
						<p className="text-[0.6rem]">USD {item.price}</p>
					</div>
					<div className="grid gap-[1rem] [&>i]:hover:cursor-pointer"></div>
				</div>
			))}
		</div>
	)
}
