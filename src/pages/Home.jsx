import React from 'react';
import Searchbox from "../components/Searchbox/Searchbox";
import Jobs from "../components/opportunities/opportunities";

const Home = () => {
	return (
		<div className='home'>
			<Searchbox />
			<Jobs />
		</div>
	);
}
 
export default Home;