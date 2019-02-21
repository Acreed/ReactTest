import React from 'react';
import SideBar from './sidebar';
import a from './toggle';
import b from './gnmenu';

import './App2.css';

export default function App() {
  return (
    <div id="App">
      /*<SideBar />*/

      <div class="container">
      <div id="sidebar">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Users</a></li>
                  <li><a href="#">Sign Out</a></li>
          </ul>
      </div>
      <div class="main-content">
          <div class="swipe-area"></div>
          <a href="#" data-toggle=".container" id="sidebar-toggle">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </a>
      </div>
    </div>


    <nav>
      <ul>
        <li><a href="#" class="icon icon-menu" id="btn-menu">Menu</a></li>
      </ul>
    </nav>

    <div id="sideNav">
      <ul>
        <li class="searchForm"><a href="#" class="icon icon-search"><span><input type="text" placeholder="Search" class="search" /></span></a></li>
        <li><a href="#" class="icon icon-home"><span>Home</span></a></li>
        <li><a href="#" class="icon icon-articles"><span>Articles</span></a>
         
            <li><a href="#" class="icon icon-home"><span>Web Design</span></a></li>
            <li><a href="#" class="icon icon-home"><span>Web Development</span></a></li>
         
        </li>
        <li><a href="#" class="icon icon-social"><span>Social Media</span></a>
          <ul>
          <li><a href="#" class="icon icon-articles"><span>Facebook</span></a></li>
          <li><a href="#"><span>Twitter</span></a></li>               
          </ul>     
        </li>
      </ul> 
    </div>

      /*<div className="under-menu-1"></div>
      <div className="under-menu-2-swipe-area">
      <div className="under-menu-2"></div></div>
      <div className="under-menu"></div>
      <div id="page-wrap">
        <h1>AppDividend</h1>
        <h2>Check out our tutorials the side menubar</h2>
      </div>*/

    </div>
  );
}

