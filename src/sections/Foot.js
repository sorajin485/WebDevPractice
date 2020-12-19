
import React, { Component } from 'react';
import {Footer } from 'react-materialize';


function Foot () {
    return (
        <Footer
            className="example"
            copyrights="&copy 2020 Copyright 주안축산"
            links={<ul><li><a className="grey-text text-lighten-3" href="/intro">intro</a>
            </li><li><a className="grey-text text-lighten-3" href="/gogi">view</a></li>
            <li><a className="grey-text text-lighten-3" href="/review">review</a></li>
            <li><a className="grey-text text-lighten-3" href="/map">map</a></li></ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="#!">오전 10시 ~ 오후 9시</a>}
            >
            <h5 className="white-text">주안축산 대표 : 박우진</h5>
            <p className="grey-text text-lighten-4">사업자등록번호 : 145-23-00552</p>
            
            <p className="grey-text text-lighten-4">
               저기압일때는 고기앞으로.. 오늘먹을 고기를 내일로 미루지 마라
            </p>
        </Footer>
    );
}


export default Foot;