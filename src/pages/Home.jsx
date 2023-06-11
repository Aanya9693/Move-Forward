import React, {useState} from "react";
import Searchbox from "../components/Searchbox/Searchbox";
import Table from "../components/Table/Table";

const Home = () => {
	const [superTags, setSuperTags] = useState([
		"Fellowship",
		"Internship",
		"Industrial",
		"Research",
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
	const [selectedSuperTags, setSelectedSuperTags] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);

	const handleTagSelect = (tag, sup) => {
		if (!sup) {
			let copyTags = tags;
			copyTags.splice(copyTags.indexOf(tag), 1);
			setSelectedTags([...selectedTags, tag]);
			setTags(copyTags);
		} else {
			let copySuperTags = superTags;
			copySuperTags.splice(copySuperTags.indexOf(tag), 1);
			setSelectedSuperTags([...selectedSuperTags, tag]);
			setSuperTags(copySuperTags);
		}
	};
	const handleTagDeselect = (tag, sup) => {
		if (!sup) {
			let copySelectedTags = selectedTags;
			copySelectedTags.splice(copySelectedTags.indexOf(tag), 1);
			setTags([...tags, tag]);
			setSelectedTags(copySelectedTags);
		} else {
			let copySelectedSuperTags = selectedSuperTags;
			copySelectedSuperTags.splice(copySelectedSuperTags.indexOf(tag), 1);
			setSelectedSuperTags(copySelectedSuperTags);
			setSuperTags([...superTags, tag]);
		}
	};
	return (
		<div className="home">
			<Searchbox
				tags={tags}
				superTags={superTags}
				handleTagSelect={handleTagSelect}
				handleTagDeselect={handleTagDeselect}
				selectedTags={selectedTags}
				selectedSuperTags={selectedSuperTags}
			/>
			{/* <Jobs /> */}
			<Table
				tags={tags}
				superTags={superTags}
				handleTagSelect={handleTagSelect}
				handleTagDeselect={handleTagDeselect}
				selectedTags={selectedTags}
				selectedSuperTags={selectedSuperTags}
			/>
		</div>
	);
};

export default Home;
