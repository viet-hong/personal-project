import React from "react";
import logo from '././assets/images/logo.png';
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
      return(
        <header>
          <div className="container">
            <div className="header-bottom">
              <div className="top after-clear">
                <ul className="right menu">
                  <li><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></li>
                </ul>
              </div>
              <Link to="/" className="logo"><img src={logo} alt=""/></Link>
              <div className="bottom after-clear">
                <div className="right">
                  <form action="" className="searchform">
                    <input type="search" className="inp-search" placeholder="Tìm kiếm"/>
                    <button className="btn-search" type="submit"><i className="fa fa-search"></i></button>
                  </form>
                </div>
                <div className="left">
                  <span className="label-left">XU HƯỚNG</span>
                  <div className="flex-news">
                    <ul className="slides">
                      <li><a href="/"><img src="assets/images/img-xu-huong.jpg" alt=""/>A shirt tailored for the great...</a></li>
                    </ul>
                  </div>
                </div>
                <button type="button" className="menu-mobile-toggle">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
            </div>
          </div>
        </header>
      )
    }
  }
export default Header;