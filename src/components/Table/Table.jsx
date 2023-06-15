/* eslint-disable react/prop-types */
import React, { useState, useMemo } from "react";
import "./Table.css";
import Tag from "../Tag/Tag";
// import data from "../../assets/dev_data/testData.json";
import data from "../../assets/dev_data/data5.json";
import Button from "../Button/Button";
import SearchResults from "./SearchResults";
import Pagination from "../Pagination/Pagination";

const Table = ({
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
	query,
}) => {

	// console.log({query});
	console.log({selectedSuperTags});
	const pageLength = 10;

	let results = data;
	// console.log(results.length);
	if (selectedSuperTags.length !== 0) {
		results = data.filter((item) => selectedSuperTags.includes(item.type));
	}
	if (selectedTags.length !== 0) {
		console.log(results.length);
		results.forEach((result) => {
			result.score = 0;
			result.tags.forEach((tag) => {
				if (selectedTags.includes(tag)) result.score++;
			});
			console.log(result.score);
		});
	}

	let sortedResults = results.sort((r1, r2) =>
		r1.score < r2.score ? 1 : r1.score > r2.score ? -1 : 0
	);

	const [currentPage, setCurrentPage] = useState(1);



	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageLength;
		const lastPageIndex = firstPageIndex + pageLength;

		const filteredData = data.filter((item) => {
		  const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());

		  const matchesTags = selectedTags.length === 0 || 
			selectedTags.some((tag) => item.tags.includes(tag));

			const matchesSuperTags = selectedSuperTags.length === 0 || item.type.includes(selectedSuperTags);
			
		  return matchesQuery && matchesTags && matchesSuperTags;
		});
		return filteredData.slice(firstPageIndex, lastPageIndex);
	  }, [currentPage, pageLength, query, selectedTags, selectedSuperTags, data]);

		const filteredData = data.filter((item) => {
		  const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());

		  const matchesTags = selectedTags.length === 0 || 
			selectedTags.some((tag) => item.tags.includes(tag));

			const matchesSuperTags = selectedSuperTags.length === 0 || item.type.includes(selectedSuperTags);
			
		  return matchesQuery && matchesTags && matchesSuperTags;
		});
		return filteredData.slice(firstPageIndex, lastPageIndex);
	  }, [currentPage, pageLength, query, selectedTags, selectedSuperTags, data]);

	return (
		<div className="table">
			<div className="divider"></div>
			<SearchResults
				data={currentTableData}
				selectedSuperTags={selectedSuperTags}
				selectedTags={selectedTags}
				handleTagDeselect={handleTagDeselect}
				handleTagSelect={handleTagSelect}
				query={query}
			/>
			<Pagination
				className="pagination-bar"
				currentPage={currentPage}
				totalCount={results.length}
				pageSize={pageLength}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default Table;
