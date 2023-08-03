import Image from "next/image";
import Link from "next/link";
import LoginForm from "./components/authorization/LoginForm";

const Pro = ({ key, label, description, img }) => {
	return (
		<div className="border-2 py-8 px-8 rounded-2xl shadow-xl border-[#45818e] ">
			<img src={img} className="m-auto w-[64px] pb-12"></img>
			<h1 className=" text-center text-[#45818e] font-semibold text-xl">
				{label}
			</h1>
			<div className="md:w-[240px] m-auto text-justify py-12">
				{description}
			</div>
		</div>
	);
};

export default function Home() {
	const pros = [
		{
			label: "Fast",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur sunt, odit nemo facilis amet!",
			icon: "/icons/zap.svg",
		},
		{
			label: "Lightweight",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur sunt, odit nemo facilis amet!",

			icon: "/icons/feather.svg",
		},
		{
			label: "Easy to use",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur sunt, odit nemo facilis amet!",

			icon: "/icons/check.svg",
		},
	];
	const prosToShow = pros.map((pro, index) => {
		return (
			<Pro
				key={index}
				label={pro.label}
				description={pro.description}
				img={pro.icon}
			/>
		);
	});

	return (
		<main className=" pb-8">
			<div className=" bg-[#fff2cc] py-8">
				<div>
					<div className="text-center text-[#042123] md:text-6xl text-4xl pt-36 font-bold">
						Unleash your{" "}
						<span className="">mind</span>.
					</div>
					<div className="lg:text-center text-left md:w-[600px] w-[300px] text-md m-auto pt-12">
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Similique impedit
						numquam, animi nam architecto atque,
						eos laboriosam unde molestiae quae
						deleniti recusandae quia cupiditate!
					</div>
				</div>
				<div className="text-center mt-20 mb-36 text-2xl font-bold">
					<Link
						href="/pages/canvas"
						className="bg-[#042123] shadow-md hover:bg-white hover:text-[#042123] duration-150 text-[#fff2cc] rounded-xl  px-6 py-3"
					>
						Action
					</Link>
				</div>
			</div>
			<div className="text-center my-20  m-auto">
				<p className="text-4xl ">
					Enhance your writing experience.
				</p>
				<div className="flex flex-row justify-center space-x-36 mt-20">
					{prosToShow}
				</div>
			</div>
			{/* <div className="bg-[#45818e] py-24">
				<div className="w-[1080px] flex flex-row m-auto items-center">
					<img
						src="typewriter.png"
						className="w-[360px] m-auto drop-shadow-lg"
					></img>
					<div className="text-white">
						<div className="w-[700px]">
							<div className="text-4xl font-bold ">
								Lorem Ipsum
							</div>
							<div className=" m-auto">
								Lorem, ipsum dolor sit
								amet consectetur
								adipisicing elit. Nobis
								cum temporibus
								doloremque nulla, vitae
								quisquam!
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#fff2cc] py-24">
				<div className="w-[1080px] flex flex-row m-auto items-center">
					<div className="">
						<div className="w-[700px]  text-right ">
							<div className="text-4xl m-auto font-bold">
								Lorem Ipsum
							</div>
							<div className="">
								Lorem, ipsum dolor sit
								amet consectetur
								adipisicing elit. Nobis
								cum temporibus
								doloremque nulla, vitae
								quisquam!
							</div>
						</div>
					</div>
					<img
						src="typewriter.png"
						className="w-[360px] m-auto drop-shadow-lg"
					></img>
				</div>
			</div> */}
		</main>
	);
}
