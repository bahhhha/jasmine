"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your authentication logic

	const handleLogout = () => {
		// Replace this with your logout logic
		setIsLoggedIn(false);
	};

	return (
		<div className="flex md:w-[1080px] py-8 text-[#042123] justify-around m-auto">
			<div className="flex items-center space-x-2 md:text-xl text-md font-bold">
				<img src="/film.svg"></img>
				<p>Jasmine</p>
			</div>
			<nav className="font-light md:space-x-12 space-x-4 md:text-lg text-md">
				<Link
					href="/"
					className="text-[#fff2cc] font-semibold hover:bg-[#45818e] hover:text-white duration-100 bg-[#042123] px-4 py-3 rounded-xl"
				>
					Home
				</Link>
				<Link
					href="/"
					className="hover:text-[#45818e] duration-100"
				>
					About
				</Link>
				<Link
					href="/"
					className="hover:text-[#45818e] duration-100"
				>
					Contact
				</Link>
				{isLoggedIn ? (
					<button
						className="underline decoration-[#45818e] hover:text-[#45818e] duration-100"
						onClick={handleLogout}
					>
						Log Out
					</button>
				) : (
					<Link
						href="/pages/auth/login"
						className="underline underline-offset-2 decoration-[#45818e] hover:text-[#45818e] duration-100"
					>
						Log In
					</Link>
				)}
			</nav>
		</div>
	);
};

export default Header;
