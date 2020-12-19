
import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import background2 from './test.jpg';
import { Parallax,Carousel } from 'react-materialize';

function Intro() {
    return (
        <div>
            <Parallax
                image={<img alt="" src="/image/img/banner/banner_4.jpg" />}
                options={{
                    responsiveThreshold: 0
                }}>
                <div class="section no-pad-bot">
                    <div class="container">
                        <h1 class="header left teal-text text-lighten-2">매장 소개</h1>
                        <div class="row">
                            <h5 class="header col s12 light">방문을 환영합니다</h5>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className="section white">
                <div className="row container">
                    <h4 className="header">
                        소비자는 고기를 살때 불안합니다.
                </h4>
                    <p className="flow-text grey-text text-darken-3 lighten-3">
                        혹시 오래된 고기가 아닐까?
                </p>
                </div>
            </div>
            <Carousel
            carouselId="Carousel-2"
            images={[
                '/image/slaughter/pig/pig_04.png',
                '/image/slaughter/pig/pig_08.png',
                '/image/slaughter/pig/pig_011.png',
                '/image/slaughter/pig/pig_18.png',
                '/image/slaughter/pig/pig_22.png',
                '/image/slaughter/pig/pig_027.png',
                '/image/slaughter/pig/pig_032.png',
                '/image/slaughter/pig/pig_037.png',
                '/image/slaughter/pig/pig_040.png',
                '/image/slaughter/pig/pig_041.png'
            ]}
            options={{
                dist: -35,
                duration: 300,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                numVisible: 10,
                onCycleTo: null,
                padding: 0,
                shift: 0
            }}
            />
            
            <div className="section white">
                <div className="row container">
                    <h4 className="header center">
                        모든 도축과정을 
                </h4>
                    <p className="flow-text grey-text text-darken-3 lighten-3 center">
                        소비자 앞에서 보여드리겠습니다.
                </p>
                </div>
            </div>
            <Carousel
            carouselId="Carousel-2"
            images={[
                '/image/slaughter/cow/cow_001.jpg',
                '/image/slaughter/cow/cow_003.jpg',
                '/image/slaughter/cow/cow_005.jpg',
                '/image/slaughter/cow/cow_008.jpg',
                '/image/slaughter/cow/cow_014.jpg',
                '/image/slaughter/cow/cow_017.jpg',
                '/image/slaughter/cow/cow_018.jpg'
            ]}
            options={{
                dist: -20,
                duration: 300,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                numVisible: 10,
                onCycleTo: null,
                padding: 0,
                shift: 0
            }}
            />
            <div className="container">
                <div className="section">
                    {/*   Icon Section   */}
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons large ">info</i></h2>
                                <h5 className="center">정보를 알려드립니다.</h5>
                                <p className="light flow-text">어떤 고기가 어디에 쓰이는 재료인지 불편함을 해결하기 위해
                                                        우리만의 생각과 방식으로 알려드리겠습니다.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons large">group</i></h2>
                                <h5 className="center">소통을 하겠습니다.</h5>
                                <p className="light flow-text">동네가게를 오시는 고객들에게 동네감성의 쉼터가 되도록 노력하겠습니다.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons large">hearing</i></h2>
                                <h5 className="center">귀 기울여 듣겠습니다.</h5>

                                <p className="light flow-text">이를 통해 소비자가 정말 원하는 상품을 구매할 수 있도록 하겠습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Intro;
