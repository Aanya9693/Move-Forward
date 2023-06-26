/* eslint-disable react/prop-types */
import React, { useState, useMemo, useEffect } from "react";
import "./Table.css";
import Tag from "../Tag/Tag";
// import data from "../../assets/dev_data/testData.json";
// import data from "../../assets/dev_data/data5.json";
import Button from "../Button/Button";
import SearchResults from "./SearchResults";
import Pagination from "../Pagination/Pagination";
import { getData } from "../../services/api";

const Table = ({
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
	query,
}) => {
	// console.log({query});
	// console.log({ selectedSuperTags });
	const pageLength = 10;

	const [data, setData] = useState([]);
	// let results = data;

	useEffect(() => {
		const refreshData = async () => {
			try {
				const res = await getData();

				if (res.data.message === "success") {
					setData(res.data.data.oppurtunities);
					
				}
			} catch (err) {
				console.log(err);
			}
		};

		refreshData();
	}, []);

	

	const results = useMemo(() => {
		let resultsCopy = data;
		console.log("resultsCopy = ", resultsCopy);
		console.log("refreshing results");
		
		if (selectedSuperTags.length > 0) {
			resultsCopy = resultsCopy.filter((item) =>
				selectedSuperTags.includes(item.type)
			);
		}
		
		if (selectedTags.length > 0) {
			selectedTags.forEach((selectedTag) => {
				resultsCopy = resultsCopy.filter((item) =>
					item.tags ? item.tags.includes(selectedTag) : false
				);
			});
		}

		if (query.length > 0) {
			const queries = query.split(" ");

			resultsCopy.forEach((result) => {
				const mash =
					result.title +
					" " +
					result.description +
					" " +
					result.deadline +
					" " +
					result.tags +
					" " +
					result.location;

				result.score = 0;

				queries.forEach((q) => {
					if (mash.toLowerCase().includes(q)) result.score++;
				});
			});
		}
		console.log("new results -> ", resultsCopy);
		// results = resultsCopy;
		return resultsCopy;

	}, [data, query, selectedSuperTags, selectedTags]);

	// console.log(results.length);
	// if (selectedSuperTags.length !== 0) {
	// 	setResults(
	// 		results.filter((item) => selectedSuperTags.includes(item.type))
	// 	);
	// }
	// if (selectedTags.length !== 0) {
	// 	selectedTags.forEach((selectedTag) => {
	// 		setResults(
	// 			results.filter((item) =>
	// 				item.tags ? item.tags.includes(selectedTag) : false
	// 			)
	// 		);
	// 	});
	// }

	// if (
	// 	query.length > 0 ||
	// 	selectedTags.length !== 0 ||
	// 	selectedSuperTags.length !== 0
	// ) {
	// 	const queries = query.split(" ");
	// 	let resultsCopy = results;

	// 	if (selectedSuperTags.length !== 0) {
	// 		resultsCopy = resultsCopy.filter((item) =>
	// 			selectedSuperTags.includes(item.type)
	// 		);
	// 	}
	// 	if (selectedTags.length !== 0) {
	// 		selectedTags.forEach((selectedTag) => {
	// 			resultsCopy = resultsCopy.filter((item) =>
	// 				item.tags ? item.tags.includes(selectedTag) : false
	// 			);
	// 		});
	// 	}

	// 	if (query.length > 0) {
	// 		resultsCopy.forEach((result) => {
	// 			const mash =
	// 				result.title +
	// 				" " +
	// 				result.description +
	// 				" " +
	// 				result.deadline +
	// 				" " +
	// 				result.tags +
	// 				" " +
	// 				result.location;

	// 			result.score = 0;

	// 			queries.forEach((q) => {
	// 				if (mash.toLowerCase().includes(q)) result.score++;
	// 			});
	// 		});
	// 	}
			

	// 	results = resultsCopy;
	// }

	// setResults(results.filter(result => result.score > 0));

	// const [sortedResults, setSortedResults] = useState(results
	// 	.sort((r1, r2) =>
	// 		r1.score < r2.score ? 1 : r1.score > r2.score ? -1 : 0
	// 	)
	// 	.filter((result) => result.score > 0));

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {

		console.log('refresfinh table data');
		const sortedResults = results
			.sort((r1, r2) =>
				r1.score < r2.score ? 1 : r1.score > r2.score ? -1 : 0
			)
			.filter((result) => result.score ? result.score > 0 : true);
		
		console.log('sorted results -> ', sortedResults);
		const firstPageIndex = (currentPage - 1) * pageLength;
		const lastPageIndex = firstPageIndex + pageLength;

		return sortedResults.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, pageLength, results]);

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
