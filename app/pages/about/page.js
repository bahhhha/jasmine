const About = () => {
	return (
		<div className="w-screen max-w-screen bg-[#042123] py-36 text-lg">
			<div className="md:w-[720px] m-auto bg-[#042123] text-white">
				<img
					src="/icons/clapperboard.svg"
					className="w-[140px] m-auto py-6"
				></img>
				<p className="text-center">
					JasmineAI was created by{" "}
					<span className="font-bold">
						Bakdaulet Zharylkassyn
					</span>
					.
				</p>
				<p className="text-center pt-12">
					Used stack and technologies:
				</p>

				<ol>
					<li>Next.js</li>
					<li>Tailwind</li>
					<li>FastAPI</li>
					<li>GPT-3.5</li>
					<li>Stable Diffusion</li>
					<li>Docker</li>
					<li>Git</li>
				</ol>
				<div className="flex justify-center text-[#fff2cc] py-12 space-x-16 ">
					<a
						href="https://github.com/mintjulep21/jasmine"
						className="px-3 py-2 bg-[#45818e] rounded-md drop-shadow-lg duration-150 hover:text-[#45818e] hover:bg-[#fff2cc]"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/bakdaulet-zharylkassyn-676860224/"
						className="px-3 py-2 bg-[#45818e] rounded-md drop-shadow-lg duration-150 hover:text-[#45818e] hover:bg-[#fff2cc]"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
