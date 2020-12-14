
import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import { Link,NavLink,Redirect} from 'react-router-dom';
class Navlist extends Component{
    componentDidMount() {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {});
      }
    render(){
        return (
            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper container">
                    <NavLink to="/" className="brand-logo">Logo</NavLink>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">내정보</a></li>
                        <li><a href="#">로그인/로그아웃</a></li>
                    </ul>
                    </div>
                    <div className="nav-content container">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><NavLink to="/intro">매장소개</NavLink></li>
                        <li className="tab"><NavLink to="/test">test</NavLink></li>
                        <li className="tab"><NavLink to="/gogi">고기구경</NavLink></li>
                        <li className="tab"><NavLink to="/review">매장리뷰</NavLink></li>
                        <li className="tab"><NavLink to="/map">오시는길</NavLink></li>
                    </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#">내정보</a></li>
                    <li><a href="#">로그인/로그아웃</a></li>
                </ul>
            </div>
        );
    }
}
export default Navlist;