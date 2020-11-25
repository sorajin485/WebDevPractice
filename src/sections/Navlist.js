
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
                    <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">Logo</NavLink>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    </div>
                    <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="#test1">매장소개</a></li>
                        {/* <li className="tab"><a href="#test2">고기구경</a></li> */}
                        <li className="tab"><NavLink to="/gogi">고기구경</NavLink></li>
                        <li className="tab"><a href="#test3">매장리뷰</a></li>
                        <li className="tab"><a href="#test4">오시는길</a></li>
                    </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        );
    }
}
export default Navlist;