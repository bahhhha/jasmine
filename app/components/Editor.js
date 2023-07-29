import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

const Editor = ({ input, setInput }) => {
	useEffect(() => {
		// You can add logic here to fetch initial input from a source
		// For instance, from local storage or an API endpoint
	}, []);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<div className="p-2 flex flex-col">
			<div className="space-y-1 flex flex-col">
				<TextareaAutosize
					className="md:w-[720px] shadow-md txtarea m-auto text-center text-md min-h-[400px] p-4 border-2 border-[#062325] rounded-t-md"
					value={input}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default Editor;
