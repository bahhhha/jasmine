import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Chivo_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Chivo_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "Jasmine",
	description: "Lightweight AI co-pilot for your scripts",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
