/* eslint-disable react/prop-types */
import React from "react";
import "./Table.css";
import Tag from "../Tag/Tag";
import data from "../../assets/dev_data/testData.json";
import Button from "../Button/Button";
import SearchResults from "./SearchResults";

const Table = ({
	tags,
	superTags,
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
}) => {

	const pageLength = 10;

	
	return (
		<div className="table">
			<div className="divider"></div>
			<SearchResults
				data={data}
				selectedSuperTags= {selectedSuperTags}
				selectedTags= {selectedTags}
				handleTagDeselect= {handleTagDeselect}
				handleTagSelect= {handleTagSelect}
			/>
		</div>
	);
};

export default Table;
