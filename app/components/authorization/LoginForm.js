// components/LoginForm.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = ({ setIsLoggedIn }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);
		try {
			const params = new URLSearchParams();
			params.append("username", email);
			params.append("password", password);

			const response = await fetch(
				"https://jasmine-c6nm.onrender.com/auth/users/tokens",
				{
					method: "POST",
					headers: {
						"Content-Type":
							"application/x-www-form-urlencoded",
					},
					body: params,
				}
			);
			if (!response.ok) {
				throw new Error("Login failed. Please try again.");
			}
			const data = await response.json();
			console.log(data);

			// Redirect to another page upon successful login
			setIsLoggedIn(true);
			router.push("/pages/canvas");
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="w-802 mx-auto mt-8">
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div className="mb-6">
				<label
					htmlFor="password"
					className="block text-sm font-medium text-gray-700"
				>
					Password
				</label>
				<input
					type="password"
					id="password"
					className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<button
				type="submit"
				className="w-full  bg-[#45818e] hover:bg-[#054044] text-white font-semibold py-2 rounded-md"
			>
				Log In
			</button>
			{error && (
				<div className="text-red-500 text-center py-4">
					{error}
				</div>
			)}
			<div className="text-center text-[#45818e] pt-4 hover:text-[#054044] duration-100">
				<Link href="/pages/auth/register">
					I don't have an account
				</Link>
			</div>
		</form>
	);
};

export default LoginForm;
