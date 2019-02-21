import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './App.css';

export default props => {
  return (
  	<div>
		<div className='menu-2'>
		  	<Menu right>
			      <a className="menu-item" href="#">
			        <span>Home</span>
			      </a>

			      <a className="menu-item" href="#">
			        <span>Explore</span>
			      </a>

			      <a className="menu-item" href="#">
			        <span>Users</span>
			      </a>

			      <a className="menu-item" href="#">
			        <span>Sign Out</span>
			      </a>
			</Menu>
		</div>
  		<div className='menu-1'>
			<Menu>
			      <a className="menu-item icon icon-home" href="#">
			      	<span>Home</span>
			      </a>

			      <a className="menu-item icon icon-articles" href="#">
			      	<span>Articles</span>
			      </a>

			      <a className="menu-item icon icon-home" href="#">
			      	<span>Web Design</span>
			      </a>

			      <a className="menu-item icon icon-home" href="#">
			      	<span>Web Development</span>
			      </a>  

			      <a className="menu-item icon icon-social" href="#">
			      	<span>Social Media</span>
			      </a>

			      <a className="menu-item icon icon-facebook" href="#">
			      	<span>Facebook</span>
			      </a>

			      <a className="menu-item icon icon-twitter" href="#">
			      	<span>Twitter</span>
			      </a>
			</Menu>
		</div>
	</div>
  );
};