import React from 'react';

const Header = (props) => {
  
  let header;

  if(props.nav) {

  	header = (
			<nav>
				<ul className="clearfix">
					<li><a href="" className="selected">add books</a></li>
					<li><a href="">add category</a></li>
					<li><a href="">view category</a></li>
					<li><a href="">view books</a></li>
					<li><a href="">logout</a></li>
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
