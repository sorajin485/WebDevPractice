
import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import { NavLink} from 'react-router-dom';
import { SignStatus } from '../recoil/SignStatus'
import { useRecoilState } from 'recoil';
import axios from 'axios';

function Navlist () {
    const [ signStatus,setSignStatus ] = useRecoilState(SignStatus);

    useEffect(()=>{
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});
        getInfo()
        .then((response) =>{
            if(response.data && !signStatus.status){
                setSignStatus({
                    status : true,
                    name : response.data.userName
                });
            }
        }).catch((err) =>{
          console.log("getInfo error",err);
        })
    });
    const getInfo = () => {
        const url = '/api/users/getInfo';
        return axios.get(url)
    };

    const logout = () =>{
        const url = '/api/users/logout';
        return axios.post(url,{}).then((res) => {
            console.log("logout response : ", res.data);
        }).catch((err) => {
            console.log("logout err : ", err);
        });
    }

    const loginButton = (
        <li>
            <NavLink to="/login">
                <i className="material-icons">vpn_key</i>
            </NavLink>
        </li>
    );
    const logoutButton = (
        <li>
            <a onClick={logout}>
                <i className="material-icons">lock_open</i>
            </a>
        </li>
    );
    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper container">
                <NavLink to="/" className="brand-logo">Logo</NavLink>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    { signStatus.status ? "" : <li><NavLink to="/register">회원가입</NavLink></li>}
                    { signStatus.status ? logoutButton : loginButton}
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
                { signStatus.status ? logoutButton : loginButton}
            </ul>
        </div>
    );
}

export default Navlist;