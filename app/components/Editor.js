import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import Dropdown from "./Dropdown"; // import the Dropdown component

const Editor = ({ input, setInput, setChosenOptions }) => {
	const genreOptions = ["Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];
	const typeOptions = ["Movie", "Theater", "TV Series", "Short Film"];
	const timelineOptions = [
		"N/A",
		"Medieval",
		"20th century",
		"Modern",
		"Future",
		"Cyperpunk",
	];

	const [genre, setGenre] = useState(genreOptions[0]);
	const [type, setType] = useState(typeOptions[0]);
	const [timeline, setTimeline] = useState(timelineOptions[0]);

	useEffect(() => {
		setChosenOptions(genre + ", " + type + ", " + timeline);
	}, [genre, type, timeline]);

	useEffect(() => {
		// You can add logic here to fetch initial input from a source
		// For instance, from local storage or an API endpoint
	}, []);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<div className="p-2 flex flex-col">
			<div className="dropdowns-container flex md:w-[720px] w-[360px] md:flex-row flex-col md:space-x-5 m-auto pb-8">
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
				<Dropdown
					label="Timeline"
					options={timelineOptions}
					selectedOption={timeline}
					setSelectedOption={setTimeline}
				/>
			</div>
			<div className="space-y-1 flex flex-col">
				<GrammarlyEditorPlugin
					clientId="client_8rn4gTQHDHgJwYTtPEXz8q"
					className="md:w-[720px]  m-auto"
				>
					<TextareaAutosize
						className="shadow-md md:w-[720px] w-[360px] txtarea text-md md:min-h-[400px] min-h-[200px] p-4 border-2 border-[#062325] rounded-t-md"
						value={input}
						onChange={handleChange}
					/>
				</GrammarlyEditorPlugin>
			</div>
		</div>
	);
};

export default Editor;
