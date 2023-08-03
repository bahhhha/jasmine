import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import Dropdown from "./Dropdown"; // import the Dropdown component

const Editor = ({ input, setInput }) => {
	const [genre, setGenre] = useState("");
	const [type, setType] = useState("");

	const genreOptions = ["Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];
	const typeOptions = ["Movie", "Theater", "TV Series", "Short Film"];

	useEffect(() => {
		// You can add logic here to fetch initial input from a source
		// For instance, from local storage or an API endpoint
	}, []);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<div className="p-2 flex flex-col">
			<div className="dropdowns-container flex md:w-[720px]  flex-row space-x-5 m-auto pb-8">
				<Dropdown
					label="Genre"
					options={genreOptions}
					selectedOption={genre}
					setSelectedOption={setGenre}
				/>
				<Dropdown
					label="Type"
					options={typeOptions}
					selectedOption={type}
					setSelectedOption={setType}
				/>
			</div>
			<div className="space-y-1 flex flex-col">
				<GrammarlyEditorPlugin
					clientId="client_8rn4gTQHDHgJwYTtPEXz8q"
					className="md:w-[720px] m-auto"
				>
					<TextareaAutosize
						className="shadow-md md:w-[720px] txtarea text-md min-h-[400px] p-4 border-2 border-[#062325] rounded-t-md"
						value={input}
						onChange={handleChange}
					/>
				</GrammarlyEditorPlugin>
			</div>
		</div>
	);
};

export default Editor;
