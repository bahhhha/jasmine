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
		<div className="bg-lines w-screen">
			<div className="py-24 pb-36">
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
