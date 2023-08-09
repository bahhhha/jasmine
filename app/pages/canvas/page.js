"use client";
// import QuillEditor from "@/app/components/Quill";
import { useState } from "react";
import InputOutput from "@/app/components/InputOutput";
const Canvas = () => {
	const [editorValue, setEditorValue] = useState("");
	const handleEditorChange = (value) => {
		console.log(value);
		setEditorValue(value);
	};

	return (
		<div className="bg-lines max-w-screen">
			<div className="py-16 md:pt-24 md:pb-36 ">
				<div className="text-xl py-5 text-center font-light text-[#042123]">
					Start your masterpiece below.{" "}
					<span className="underline decoration-[#f0cf6c]">
						Jasmine
					</span>{" "}
					will help you.
				</div>
				<InputOutput />
			</div>
		</div>
	);
};

export default Canvas;
