import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<main className=" bg-[#fff2cc] py-8 pb-8">
			<div>
				<div className="text-center text-[#042123] md:text-6xl text-4xl pt-36 font-bold">
					Unleash your <span className="">mind</span>.
				</div>
				<div className="lg:text-center text-left md:w-[600px] w-[300px] text-md m-auto pt-12">
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Similique impedit numquam,
					animi nam architecto atque, eos laboriosam
					unde molestiae quae deleniti recusandae quia
					cupiditate!
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
		</main>
	);
}
