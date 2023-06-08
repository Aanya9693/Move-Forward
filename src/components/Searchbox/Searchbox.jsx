// import React from "react";
import "./Searchbox.css";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

import Tag from "../Tag/Tag";
import { useState } from "react";

const Searchbox = () => {

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
		"Python"
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

	const [viewMore, setViewMore] = useState(false);
	
	return (
		<div className="searchDiv">
			<div className="firstDiv">
				<div className="searchIcon">
					<AiOutlineSearch className="aioutine icon search" />
					<input
						type="text"
						className="inputText"
						placeholder="Search here...."
					/>
					<AiOutlineCloseCircle className="aioutine icon cross" />
					<button className="search_Button">Search</button>
				</div>
			</div>

			<div className="secDiv">
				<div className="selectedTags">
					{selectedSuperTags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="green"
							type="secondary"
							onClick={
								selectedSuperTags.includes(tag)
									? () => handleTagDeselect(tag, true)
									: () => handleTagSelect(tag, true)
							}
							select={selectedSuperTags.includes(tag)}
						></Tag>
					))}

					{selectedTags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="yellow"
							type="secondary"
							onClick={
								selectedTags.includes(tag)
									? () => handleTagDeselect(tag, false)
									: () => handleTagSelect(tag, false)
							}
							select={selectedTags.includes(tag)}
						></Tag>
					))}

				</div>

				{(selectedSuperTags.length != 0 || selectedTags.length != 0) && (
					<div className="diver"></div>
				)}

				<div className="superTags">
					{superTags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="green"
							type="secondary"
							onClick={
								selectedSuperTags.includes(tag)
									? () => handleTagDeselect(tag, true)
									: () => handleTagSelect(tag, true)
							}
							select={selectedzSuperTags.includes(tag)}
						></Tag>
					))}
				</div>
				
				<div className={`tags ${!viewMore && 'limit'}`}>
					{tags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="yellow"
							type="secondary"
							onClick={
								selectedTags.includes(tag)
									? () => handleTagDeselect(tag, false)
									: () => handleTagSelect(tag, false)
							}
							select={selectedTags.includes(tag)}
						></Tag>
					))}
				</div>

				<div className="viewMore" onClick={() => setViewMore(!viewMore)}>
					<p>View {viewMore ? "less" : "more"} 
						{/* <BsChevronDoubleDown className="aioutine ai viewMoreIcon" /> */}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Searchbox;
