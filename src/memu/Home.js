
import React, { Component } from 'react';
import background1 from './background1.jpg';
import background2 from './test.jpg';
import M from  'materialize-css/dist/js/materialize.min.js';
import {NavLink} from 'react-router-dom';
import {Parallax } from 'react-materialize';

function Home (){
    return (
        <div>
            <Parallax
                image={<img alt="" src="/image/img/banner/banner_3.jpg"/>}
                options={{
                responsiveThreshold: 0
                }}>
                <div class="section no-pad-bot">
                    <div class="container">
                        <h1 class="header center teal-text text-lighten-2">방문을 환영합니다.</h1>
                    <div class="row center">
                        <h4 class="header col s12 teal-text">고기를 구경해보세요</h4>
                    </div>
                    <div class="row center">
                        <a href="/gogi" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">구경가기</a>
                    </div>
                    </div>
                </div>
            </Parallax>
            
            <div className="container">
                <div className="section">
                {/*   Icon Section   */}
                    <div className="row">
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">열린 공간에서</h5>

                            <p className="light flow-text">100% 1등급이상의 건강하고 신선한 고기를 경매로 받아와 작업을 진행합니다</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">주안 축산은</h5>

                            <p className="light flow-text">조금 더 좋은 환겨에서 자란 건강한 고기, 품질 좋은 고기를 경매로 받아와 직접 도축 합니다.</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">친절 합니다.</h5>

                            <p className="light flow-text">모르는건 물어봐야합니다. 궁금한게 있다면 물어보세요.<br/> 김치찌개를 끓일때는 어떤고기가 필요한가요? 는 단순한 질문이아닙니다. 어느것이든 물어보세요</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;