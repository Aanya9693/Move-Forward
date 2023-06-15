import React, {useState} from "react";
import Searchbox from "../components/Searchbox/Searchbox";
import Table from "../components/Table/Table";

const Home = () => {
	const [superTags, setSuperTags] = useState([
		"Fellowship",
		"Internship",
		"Industrial",
		"Research",
		"Scholarship",
		"Mentorship",

	]);
	const [tags, setTags] = useState([
		"Female-only",
		"WFH",
		"Remote",
		"un-paid",
		"MNCs",
		"Backend",
		"Frontend",
		"Full-stack",
		"Software",
		"Machine Learning",
		"Data Science",
		"Data Analyst",
		"Marketing",
		"Consultancy",
		"Android",
		"Python",
	]);
	const [query, setQuery] = useState("");
	
	const [selectedSuperTags, setSelectedSuperTags] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);

	const handleTagSelect = (tag, isSuperTag) => {
		if (isSuperTag) {
		  setSelectedSuperTags([...selectedSuperTags, tag]);
		} else {
		  setSelectedTags([...selectedTags, tag]); 
		}
	  };
	  
	  const handleTagDeselect = (tag, isSuperTag) => {
		if (isSuperTag) {
		  setSelectedSuperTags(selectedSuperTags.filter((t) => t !== tag));
		} else {
		  setSelectedTags(selectedTags.filter((t) => t !== tag)); 
		}
	  
	};
	return (
		<div className="home">
			<Searchbox
				tags={tags}
				superTags={superTags}
				selectedSuperTags={selectedSuperTags}
				selectedTags={selectedTags}
				handleTagDeselect={handleTagDeselect}
				handleTagSelect={handleTagSelect}
				query={query}
				setQuery={setQuery}
				setTags={setTags}
				setSuperTags={setSuperTags}
				setSelectedTags={setSelectedTags} 
			/>
			<Table
				selectedSuperTags={selectedSuperTags}
				selectedTags={selectedTags}
				handleTagDeselect={handleTagDeselect}
				handleTagSelect={handleTagSelect}
				query={query} 
			/>
		</div>
	);
};

export default Home;
