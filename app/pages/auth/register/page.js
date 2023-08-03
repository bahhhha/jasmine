// pages/login.js

import Head from "next/head";
import LoginForm from "@/app/components/authorization/LoginForm";
import RegisterForm from "@/app/components/authorization/RegisterForm";

const LoginPage = () => {
	return (
		<div>
			<Head>
				<title>Register</title>
			</Head>
			<main className="min-h-screen bg-gray-100 flex flex-col pb-36 items-center justify-center">
				<div className="flex items-center space-x-6 pb-12 drop-shadow-md">
					<div className="">
						<img
							src="/film-blue.svg"
							className="md:w-[100px] "
						></img>
					</div>
					<p className="text-5xl font-bold text-[#45818e]">
						Jasmine
					</p>
				</div>
				<div className="bg-white shadow-md rounded-md p-8">
					<h1 className="text-3xl font-semibold mb-6">
						Register
					</h1>
					<RegisterForm />
				</div>
			</main>
		</div>
	);
};

export default LoginPage;
