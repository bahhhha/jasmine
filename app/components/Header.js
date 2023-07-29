import Link from "next/link";
const Header = () => {
	return (
		<div className="flex md:w-[1080px] py-8 text-[#042123] justify-around m-auto">
			<div className="flex items-center space-x-2 md:text-xl text-md font-bold">
				<img src="/film.svg"></img>
				<p>Jasmine</p>
			</div>
			<nav className="font-semibold md:space-x-8 space-x-4 md:text-xl text-md">
				<Link
					href="/"
					className="text-[#fff2cc]  bg-[#042123] px-4 py-3 rounded-xl"
				>
					Home
				</Link>
				<Link href="/">About</Link>
				<Link href="/">Contact</Link>
			</nav>
		</div>
	);
};

export default Header;
