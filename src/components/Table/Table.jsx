/* eslint-disable react/prop-types */
import React, {useState, useMemo} from "react";
import "./Table.css";
import Tag from "../Tag/Tag";
// import data from "../../assets/dev_data/testData.json";
import data from "../../assets/dev_data/data4.json";
import Button from "../Button/Button";
import SearchResults from "./SearchResults";
import Pagination from "../Pagination/Pagination";

const Table = ({
	tags,
	superTags,
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
}) => {

	const pageLength = 10;

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageLength;
		const lastPageIndex = firstPageIndex + pageLength;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<div className="table">
			<div className="divider"></div>
			<SearchResults
				data={currentTableData}
				selectedSuperTags={selectedSuperTags}
				selectedTags={selectedTags}
				handleTagDeselect={handleTagDeselect}
				handleTagSelect={handleTagSelect}
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
