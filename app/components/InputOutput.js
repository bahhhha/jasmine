import Editor from "@/app/components/Editor";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Option = ({ option, input, setActionResult, dropdownOptions }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleDropdownClick = (author) => {
		const result = option.action({ text: input, author });
		console.log(result);
		setActionResult(result);
		setDropdownOpen(false);
	};

	return (
		<div
			onMouseEnter={() => setDropdownOpen(true)}
			onMouseLeave={() => setDropdownOpen(false)}
		>
			<button
				className="text-center flex flex-col items-center justify-center text-[#fff2cc] font-medium"
				onClick={() =>
					!dropdownOptions && handleDropdownClick()
				}
			>
				<img
					src={`/icons/${option.img}`}
					title={option.label}
					className="aiIcon hover:bg-[#054044] p-2 duration-150 rounded-2xl"
				/>
				<div className="opacity-100">{option.label}</div>
			</button>
			{dropdownOpen && dropdownOptions && (
				<ul className="dropdownMenu">
					{dropdownOptions.map((author) => (
						<li
							key={author}
							className="dropdownOption"
							onClick={() =>
								handleDropdownClick(
									author
								)
							}
						>
							{author}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

const AIOptions = ({ value, options, setActionResult }) => {
	const optionsToShow = options.map((option) => (
		<li className="" key={option.label}>
			<Option
				option={option}
				input={value}
				setActionResult={setActionResult}
				dropdownOptions={
					option.label === "Imitate..."
						? [
								"Nolan",
								"Tarantino",
								"Kubrick",
								"Scorsese",
						  ]
						: null
				}
			/>
		</li>
	));

	return (
		<div className="bg-[#042123] py-4 space-y-1 border-2 border-[#fff2cc] lg:w-[720px] w-[360px] m-auto rounded-b-xl drop-shadow-lg ">
			<div className="text-[#054044] font-extrabold text-center">
				AI
			</div>
			<ol className="flex md:justify-center justify-around md:space-x-20 ">
				{optionsToShow}
			</ol>
		</div>
	);
};

const ActionResult = ({ result, editorText, setEditorText }) => {
	// Resolve the promise and get the actual result
	const [resolvedResult, setResolvedResult] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		result.then((data) => {
			setResolvedResult(data);
			setIsLoading(false);
		});
	}, [result]);

	if (isLoading) {
		return (
			<AnimatePresence>
				<div className="m-auto flex flex-1">
					<span className="loader"></span>
				</div>
			</AnimatePresence>
			// <div className="m-auto text-3xl font-extrabold text-[#45818e] jasmineSays">
			// 	Jasmine thinks...
			// </div>
		);
	}

	let renderedContent;
	let message;
	if (resolvedResult?.type === "text") {
		renderedContent = (
			<p>{resolvedResult[resolvedResult.contentKey]}</p>
		);
		message = "Jasmine says...";
	} else if (resolvedResult?.type === "image") {
		renderedContent = (
			<div className="">
				<img
					src={
						resolvedResult[
							resolvedResult.contentKey
						][0]
					}
					alt="Generated content"
				/>
			</div>
		);
		message = "Jasmine shows...";
	} else {
		// If type is neither 'text' nor 'image', render as text
		renderedContent = <p>{String(resolvedResult)}</p>;
		message = "Jasmine says...";
	}

	return (
		<div className="max-w-[800px] ">
			<motion.div
				className="flex flex-col"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 50 }}
				transition={{ duration: 0.5 }}
			>
				<div className="space-x-4 mb-5">
					<button
						className=""
						onClick={async () => {
							if (
								resolvedResult?.type ===
								"text"
							) {
								setEditorText(
									resolvedResult[
										resolvedResult
											.contentKey
									]
								);
							}
						}}
					>
						<img
							className="hover:brightness-125"
							src="/copy.svg"
							title="Copy to editor"
						/>
					</button>
					<button
						className=""
						onClick={async () => {
							if (
								resolvedResult?.type ===
								"text"
							) {
								navigator.clipboard.writeText(
									resolvedResult[
										resolvedResult
											.contentKey
									]
								);
							}
						}}
					>
						<img
							className="hover:brightness-125"
							src="/clipboard.svg"
							title="Copy to clipboard"
						/>
					</button>
					<button
						className=""
						onClick={async () => {
							if (
								resolvedResult?.type ===
								"text"
							) {
								setEditorText(
									editorText +
										"\n" +
										resolvedResult[
											resolvedResult
												.contentKey
										]
								);
							}
						}}
					>
						<img
							className="hover:brightness-125"
							src="/file-plus.svg"
							title="Add to editor"
						/>
					</button>
				</div>
				<p className="mb-5 text-3xl font-extrabold text-[#45818e] jasmineSays">
					{message}
				</p>
				{renderedContent}
			</motion.div>
		</div>
	);
};

const InputOutput = ({ isLoggedIn }) => {
	const [chosenOptions, setChosenOptions] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const options = [
		{
			label: "Character",
			img: "user-square.svg",
			action: async ({ text }) => {
				try {
					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/?text=${encodeURIComponent(
							text
						)}`
					);
					console.log(response.data);
					return {
						...response.data,
						type: "image",
						contentKey: "image",
					};
				} catch (error) {
					console.error(error);
					return `Error: ${error.message}`;
				}
			},
		},

		{
			label: "Stage",
			img: "trees.svg",
			action: async ({ text }) => {
				try {
					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/?text=${encodeURIComponent(
							text + ` (${chosenOptions})})`
						)}`,
						{},
						{
							headers: {
								accept: "application/json",
							},
						}
					);
					const resolvedResponse = response;
					console.log(text + ` (${chosenOptions})`);
					return {
						...resolvedResponse.data,
						type: "image",
						contentKey: "image",
					};
				} catch (error) {
					console.error(error);
					return `Error: ${error.message}`;
				}
			},
		},
		{
			label: "Finish",
			img: "pencil-line.svg",
			action: async ({ text }) => {
				setIsLoading(true);
				try {
					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/finish_thought?incomplete_text=${encodeURIComponent(
							text + ` (${chosenOptions})`
						)}`
					);
					setIsLoading(false);
					return {
						extended_idea:
							response.data.extended_idea,
						type: "text",
						contentKey: "extended_idea",
					};
				} catch (error) {
					console.error(error);
					setIsLoading(false);

					return `Error: ${error.message}`;
				}
			},
		},
		{
			label: "Fix",
			img: "factory.svg",
			action: async ({ text }) => {
				setIsLoading(true);

				try {
					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/fix_imperfections?text=${encodeURIComponent(
							text + ` (${chosenOptions})`
						)}`
					);
					setIsLoading(false);

					return {
						corrected_script:
							response.data.corrected_script,
						type: "text",
						contentKey: "corrected_script",
					};
				} catch (error) {
					console.error(error);
					setIsLoading(false);

					return `Error: ${error.message}`;
				}
			},
		},
		{
			label: "Imitate...",
			img: "clapperboard.svg",
			action: async ({ text, author }) => {
				try {
					setIsLoading(true);

					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/imitate?text=${encodeURIComponent(
							text + ` (${chosenOptions})`
						)}&author=${encodeURIComponent(
							author
						)}`
					);
					console.log(response);
					setIsLoading(false);

					return {
						script: response.data.script,
						type: "text",
						contentKey: "script",
					};
				} catch (error) {
					console.error(error);
					setIsLoading(false);

					return `Error: ${error.message}`;
				}
			},
		},
	];

	const [input, setInput] = useState("");
	const [actionResult, setActionResult] = useState("");
	useEffect(() => {
		console.log(input);
	}, [input]);

	return (
		<div className="flex md:flex-row flex-col justify-center max-w-screen m-auto">
			<motion.div
				style={{
					display: "flex",

					width: "100%",
					maxWidth: "1400px",
					spaceBetween: "20px",
				}}
				className="flex flex-col md:flex-row justify-center md:space-x-8 p-4 md:p-0 space-y-8 md:space-y-0"
				initial={{ marginLeft: 0 }}
				transition={{
					duration: 1,
					type: "spring",
					bounce: 0.25,
				}}
			>
				<div>
					<Editor
						input={input}
						setInput={setInput}
						setChosenOptions={setChosenOptions}
					/>
					<AIOptions
						value={input}
						options={options}
						setActionResult={setActionResult}
					/>
				</div>
				{/* {isLoading && <div>Hello WOrld</div>} */}
				<AnimatePresence>
					{actionResult && (
						<ActionResult
							result={actionResult}
							setEditorText={setInput}
							editorText={input}
						/>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default InputOutput;
