
import React, { Component } from 'react';
import background1 from './background1.jpg';
import background2 from './test.jpg';
import M from  'materialize-css/dist/js/materialize.min.js';
class Home extends Component{
    componentDidMount() {
        let parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
      }
    render(){
        return (
            <div>
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
                <div className="container">
                    <div className="section">
                    {/*   Icon Section   */}
                        <div className="row">
                            <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Speeds up development</h5>

                                <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                            </div>
                            </div>

                            <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">User Experience Focused</h5>

                                <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                            </div>
                            </div>

                            <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Easy to work with</h5>

                                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;