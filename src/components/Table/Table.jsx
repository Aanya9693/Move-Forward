/* eslint-disable react/prop-types */
import React, {useState, useMemo} from "react";
import "./Table.css";
import data from "../../assets/dev_data/data4.json";
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

	const [currentPage, setCurrentPage] = useState(1);


	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageLength;
		const lastPageIndex = firstPageIndex + pageLength;

		const filteredData = data.filter((item) => {
		  const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());

		  const matchesTags = selectedTags.length === 0 || 
			selectedTags.some((tag) => item.tags.includes(tag));

		  const matchesSuperTags = selectedSuperTags.length === 0 ||
			(item.supertags && selectedSuperTags.some((supertag) => item.supertags.includes(supertag)));
			
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
				totalCount={data.length}
				pageSize={pageLength}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default Table;
