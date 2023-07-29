import "./globals.css";
import { Chivo_Mono } from "next/font/google";
import Header from "./components/Header";

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
			</body>
		</html>
	);
}
