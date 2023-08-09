import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#042123] text-[#fff2cc] py-5">
			<div className="container mx-auto text-center relative ">
				<p className="text-sm">
					© {new Date().getFullYear()} Jasmine AI
				</p>
				<div className="flex justify-center md:space-x-8 space-x-2 mt-4">
					<a
						href="#"
						className="text-[#45818e] hover:text-white"
					>
						Privacy Policy
					</a>
					<a
						href="#"
						className="text-[#45818e] hover:text-white"
					>
						Terms of Service
					</a>
					<a
						href="#"
						className="text-[#45818e] hover:text-white"
					>
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
