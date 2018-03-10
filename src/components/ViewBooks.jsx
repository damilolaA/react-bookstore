import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ViewBooks = () => {

	return (
		<div>
			<Header nav/>
			<div className="wrapper">
	          <div id="stream">
	            <table id="tab">
	              <thead>
	                <tr>
	                  	<th>title</th>
						<th>author</th>
						<th>price</th>
						<th>category</th>
						<th>publication date</th>
						<th>image</th>
						<th>edit</th>
						<th>delete</th>
	                </tr>
	              </thead>

	              
	            </table>
	          </div>
	        </div>
			<Footer />
		</div>
	)
}

export default ViewBooks