
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
            if(response.data[0]){
                setSignStatus({
                    status : true,
                    name : response.data[0].userName
                });
            }
            console.log("res : ",response.data[0]);
            console.log("getInfo signStatus :", signStatus);
        }).catch((err) =>{
          console.log("getInfo error",err);
        })
    });
    const getInfo = () => {
        const url = '/api/users/getInfo';
        return axios.get(url)
    };

    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper container">
                <NavLink to="/" className="brand-logo">Logo</NavLink>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/register">회원가입</NavLink></li>
                    <li><NavLink to="/#">내정보</NavLink></li>
                    <li><NavLink to="/login">로그인/로그아웃</NavLink></li>
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
                <li><NavLink to="/register">회원가입</NavLink></li>
                <li><NavLink to="/#">내정보</NavLink></li>
                <li><NavLink to="/login">로그인/로그아웃</NavLink></li>
            </ul>
        </div>
    );
}

export default Navlist;