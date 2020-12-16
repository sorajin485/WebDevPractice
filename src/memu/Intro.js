
import React, { Component } from 'react';
import M from  'materialize-css/dist/js/materialize.min.js';
import background2 from './test.jpg';
import {Parallax } from 'react-materialize';

function Intro() {
    return(
        <div>
            <Parallax
                image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
                options={{
                responsiveThreshold: 0
                }}>
                <div class="section no-pad-bot">
                    <div class="container">
                            <h1 class="header center teal-text text-lighten-2">매장 소개</h1>
                        <div class="row center">
                            <h5 class="header col s12 light">방문을 환영합니다</h5>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className="section white">
                <div className="row container">
                <h2 className="header">
                    Parallax
                </h2>
                <p className="grey-text text-darken-3 lighten-3">
                    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
                </p>
                </div>
            </div>
            <Parallax
                image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
                options={{
                responsiveThreshold: 0
                }}
            />
        </div>
    );
}

export default Intro;
