/* eslint-disable react/prop-types */
// import React from "react";
import "./Searchbox.css";

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

import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import { useState } from "react";

const Searchbox = ({tags, superTags, selectedSuperTags, selectedTags, handleTagDeselect, handleTagSelect}) => {
	
	const [viewMore, setViewMore] = useState(false);
	
	return (
		<div className="searchDiv">
			<div className="firstDiv">
				<div className="searchIcon">
					<span className="material-icons">search</span>
					<input
						type="text"
						className="inputText"
						placeholder="Search here...."
					/>
					<span className="material-icons cancel">highlight_off</span>
					<Button
						innerText="Search"
						variant="primary"
						color="green"
						// endIcon={<span className="material-icons">share</span>}
					></Button>
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

// <<<<<<< main
// 				{(selectedSuperTags.length != 0 || selectedTags.length != 0) && (
// 					<div className="diver"></div>
// =======
				{(selectedSuperTags.length != 0 ||
					selectedTags.length != 0) && (
					<div className="divider"></div>
// >>>>>>> main
				)}

				{/* <div className="superTags"></div> */}
				<div className={`tags ${!viewMore && "limit"}`}>
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

				<div
					className="viewMore"
					onClick={() => setViewMore(!viewMore)}
				>
					<p>View {viewMore ? "less" : "more"}</p>
					{viewMore ? (
						<span className="material-icons">
							keyboard_double_arrow_up
						</span>
					) : (
						<span className="material-icons">
							keyboard_double_arrow_down
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Searchbox;
