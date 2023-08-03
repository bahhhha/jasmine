"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Check if passwords match
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		setIsLoading(true);
		setError(null);
		try {
			const response = await axios.post(
				"https://jasmine-c6nm.onrender.com/auth/users",
				{
					email,
					password,
				}
			);
			console.log(response.data);
			router.push("/pages/auth/login"); // Replace with your desired route
		} catch (err) {
			setError(err.response.data.detail || err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-80 mx-auto mt-8">
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
			<div className="mb-4">
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
			<div className="mb-6">
				<label
					htmlFor="confirmPassword"
					className="block text-sm font-medium text-gray-700"
				>
					Confirm Password
				</label>
				<input
					type="password"
					id="confirmPassword"
					className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
					placeholder="Confirm your password"
					value={confirmPassword}
					onChange={(e) =>
						setConfirmPassword(e.target.value)
					}
					required
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-[#45818e] hover:bg-[#054044] text-white font-semibold py-2 rounded-md"
			>
				Register
			</button>
			{error && (
				<div className="text-red-500 text-center py-4">
					{error}
				</div>
			)}
			<div className="text-center pt-6 text-[#304d72] hover:text-[#6BDBD6] duration-100">
				<Link href="/pages/Auth/Login">
					I have an account
				</Link>
			</div>
		</form>
	);
};

export default RegisterForm;
