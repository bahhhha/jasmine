const Dropdown = ({ label, options, selectedOption, setSelectedOption }) => {
	return (
		<div className="flex flex-row space-x-2 p-2">
			<label>{label}:</label>
			<select
				className="bg-white border-2 border-[#76a5af] border-opacity-10 drop-shadow-md rounded-md"
				value={selectedOption}
				onChange={(e) => setSelectedOption(e.target.value)}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
