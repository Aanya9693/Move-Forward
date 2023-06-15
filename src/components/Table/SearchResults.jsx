/* eslint-disable react/prop-types */
import React from "react";
import "./Table.css";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";

const SearchResults = ({
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
	data,
}) => {
	return data.length === 0 ? ("No results Found") :  data.map((item) => (
		<div className="item" key={item.name}>
			<div className="row-1">
				<div className="col-1">
					<div className="logo"></div>
				</div>
				<div className="col-2">
					<div className="title">{item.name}</div>
					<div className="org">{item.org}</div>
				</div>
				<div className="col-3">
					{/* <span className="material-icons">notifications_none</span> */}
					<span className="material-icons">bookmark_border</span>
				</div>
			</div>
			<div className="row-2 description">{item.description}</div>
			<div className="row-3 tags">
				{
					<Tag
						innerHtml={item.type}
						key={item.type}
						color="green"
						type="secondary"
						onClick={
							selectedSuperTags.includes(item.type)
								? () => handleTagDeselect(item.type, true)
								: () => handleTagSelect(item.type, true)
						}
						select={selectedSuperTags.includes(item.type)}
					></Tag>
				}
				{item.tags.map((tag) => (
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
			<div className="divider"></div>
			<div className="row-4 details">
				<div className="col-1">
					<div className="date">
						<div className="icon">
							<span className="material-icons">event</span>
						</div>
						{item.deadline}
					</div>
					<div className="stipend">
						<div className="icon">
							<span className="material-icons">payments</span>
						</div>
						{item.stipend}
					</div>
				</div>
				<div className="col-2">
					{/* <Button
						innerText="Share"
						variant="primary"
						color="green"
						endIcon={<span className="material-icons">share</span>}
					/> */}
				</div>
			</div>
		</div>
	));
};

export default SearchResults;
