
import React, { Component } from 'react';
import M from  'materialize-css/dist/js/materialize.min.js';
import background2 from './test.jpg';
class Intro extends Component{
    componentDidMount() {
        let parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
      }
    render(){
        return(
           
            <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <h1 class="header center teal-text text-lighten-2">Parallax Template</h1>
                        <div class="row center">
                            <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                    <div class="row center">
                        <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                    </div>
                </div>
                </div>
                <div class="parallax"><img src={background2} alt="Unsplashed background img 1"/></div>
                
            </div>

        );
    }
}
export default Intro;
