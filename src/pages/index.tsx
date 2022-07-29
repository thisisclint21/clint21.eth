import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<div
			className="lg:flex lg:justify-center min-h-screen lg:bg-gradient-to-r lg:from-blue-300 lg:to-teal-200 flex-col">
			<div
				className="relative mx-auto lg:w-[500px] bg-white px-8 py-10 lg:outline outline-[21px] lg:outline-[#ffffff9c] lg:rounded-[21px]">
				<h1 className="flex gap-x-2 items-center text-3xl mb-3 font-semibold">
					<img src="https://www.gravatar.com/avatar/cc9032759e9f56f25bf395a341b6386e"
					     className="rounded-full h-8 ring-ring-blue-200" alt={"avatar"} />
					I'm Clint ⚡️
					<div className="ml-1 hidden lg:block text-gray-300">clint21.eth</div>
				</h1>
				<p className="text-lg text-gray-600">
					I mainly build stuff on the internet. </p>
				<div className="divide-y divide-gray-300/50">
					<div className="space-y-6 py-8 text-base leading-7 text-gray-600">
						<p className="text-lg text-gray-900 mb-6 font-semibold">Follow me here:</p>
						<ul className="space-y-4">
							<li>
								<a href="https://twitter.com/thisisclint21" className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-sky-500"
									     viewBox="0 0 512 512">
										<path
											d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
									</svg>
									<p className="ml-4">I tweet useless things at <code
										className="text-sm font-bold text-gray-900">@thisisclint21</code></p>
								</a>
							</li>
							<li>
								<a href="https://github.com/thisisclint21" className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-gray-700"
									     viewBox="0 0 496 512">
										<path
											d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
									</svg>
									<p className="ml-4">I build awesome websites at <code
										className="text-sm font-bold text-gray-900">@thisisclint21</code></p>
								</a>
							</li>
							<li>
								<a href="https://keys.openpgp.org/vks/v1/by-fingerprint/E297004365BD62864A28E9883FE3B75BC91F039C"
								   className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-gray-500"
									     viewBox="0 0 512 512">
										<path
											d="M256.1 246c-13.25 0-23.1 10.75-23.1 23.1c1.125 72.25-8.124 141.9-27.75 211.5C201.7 491.3 206.6 512 227.5 512c10.5 0 20.12-6.875 23.12-17.5c13.5-47.87 30.1-125.4 29.5-224.5C280.1 256.8 269.4 246 256.1 246zM255.2 164.3C193.1 164.1 151.2 211.3 152.1 265.4c.75 47.87-3.75 95.87-13.37 142.5c-2.75 12.1 5.624 25.62 18.62 28.37c12.1 2.625 25.62-5.625 28.37-18.62c10.37-50.12 15.12-101.6 14.37-152.1C199.7 238.6 219.1 212.1 254.5 212.3c31.37 .5 57.24 25.37 57.62 55.5c.8749 47.1-2.75 96.25-10.62 143.5c-2.125 12.1 6.749 25.37 19.87 27.62c19.87 3.25 26.75-15.12 27.5-19.87c8.249-49.1 12.12-101.1 11.25-151.1C359.2 211.1 312.2 165.1 255.2 164.3zM144.6 144.5C134.2 136.1 119.2 137.6 110.7 147.9C85.25 179.4 71.38 219.3 72 259.9c.6249 37.62-2.375 75.37-8.999 112.1c-2.375 12.1 6.249 25.5 19.25 27.87c20.12 3.5 27.12-14.87 27.1-19.37c7.124-39.87 10.5-80.62 9.749-121.4C119.6 229.3 129.2 201.3 147.1 178.3C156.4 167.9 154.9 152.9 144.6 144.5zM253.1 82.14C238.6 81.77 223.1 83.52 208.2 87.14c-12.87 2.1-20.87 15.1-17.87 28.87c3.125 12.87 15.1 20.75 28.1 17.75C230.4 131.3 241.7 130 253.4 130.1c75.37 1.125 137.6 61.5 138.9 134.6c.5 37.87-1.375 75.1-5.624 113.6c-1.5 13.12 7.999 24.1 21.12 26.5c16.75 1.1 25.5-11.87 26.5-21.12c4.625-39.75 6.624-79.75 5.999-119.7C438.6 165.3 355.1 83.64 253.1 82.14zM506.1 203.6c-2.875-12.1-15.51-21.25-28.63-18.38c-12.1 2.875-21.12 15.75-18.25 28.62c4.75 21.5 4.875 37.5 4.75 61.62c-.1249 13.25 10.5 24.12 23.75 24.25c13.12 0 24.12-10.62 24.25-23.87C512.1 253.8 512.3 231.8 506.1 203.6zM465.1 112.9c-48.75-69.37-128.4-111.7-213.3-112.9c-69.74-.875-134.2 24.84-182.2 72.96c-46.37 46.37-71.34 108-70.34 173.6l-.125 21.5C-.3651 281.4 10.01 292.4 23.26 292.8C23.51 292.9 23.76 292.9 24.01 292.9c12.1 0 23.62-10.37 23.1-23.37l.125-23.62C47.38 193.4 67.25 144 104.4 106.9c38.87-38.75 91.37-59.62 147.7-58.87c69.37 .1 134.7 35.62 174.6 92.37c7.624 10.87 22.5 13.5 33.37 5.875C470.1 138.6 473.6 123.8 465.1 112.9z"/>
									</svg>
									<p className="ml-4">My PGP fingerprint is <code
										className="text-sm font-bold text-gray-900">C91F039C</code></p>
								</a>
							</li>
						</ul>
						<p>Now that we know each other a bit better, here is my address, if you want to tips or PM me
							via <a href="https://chat.blockscan.com/index">Blockscan</a>.
						</p>
						<p className="flex text-sm- items-center gap-x-3 font-semibold">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 784.37 1277.39">
								<g>
									<polygon fill="#343434" fillRule="nonzero"
									         points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
									<polygon fill="#8C8C8C" fillRule="nonzero"
									         points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
									<polygon fill="#3C3C3B" fillRule="nonzero"
									         points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
									<polygon fill="#8C8C8C" fillRule="nonzero"
									         points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
									<polygon fill="#141414" fillRule="nonzero"
									         points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
									<polygon fill="#393939" fillRule="nonzero"
									         points="0,650.54 392.07,882.29 392.07,472.33 "/>
								</g>
							</svg>
							<a href="https://etherscan.io/address/0x8cc0849d1e25e5094d2ff6e92b7c7ca3ecadfaf8"
							   className="text-sky-500 truncate hover:text-sky-600">
								0x8cc0849d1e25e5094d2ff6e92b7c7ca3ecadfaf8
							</a>
						</p>
					</div>
					<div className="pt-8 text-base font-semibold leading-7">
						<p className="text-gray-900">An idea in mind, a suggestion to share?</p>
						<p>
							<a href="mailto:me@clint21.dev" className="text-sky-500 hover:text-sky-600">Send me an
								email &rarr;</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
