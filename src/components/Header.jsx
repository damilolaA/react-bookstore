import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  
  let header;

  if(props.nav) {

  	header = (
			<nav>
				<ul className="clearfix">
					<li><Link to="/dashboard" className="selected">add category</Link></li>
					<li><Link to="/categories">view category</Link></li>
					<li><Link to="">view book</Link></li>
					<li><Link to="">view book</Link></li>
					<li><Link to="">logout</Link></li>
				</ul>
			</nav>
		);
  } else {
  	header = "";
  }

  return (
    <section>
      <div className="mast">
           <h1>T<span>SSB</span></h1>
          {header}
      </div>
    </section>
  );
};

export default Header;
