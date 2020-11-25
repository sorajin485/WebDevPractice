
import React, { Component } from 'react';

class Gogi extends Component {
    render(){
        return(
            <div>
                <div class="row">

                <div class="col s3 red">
                {/* Grey navigation panel  */}
                    <div class="container">
                        {/* Page Content goes here */}
                        <ul class="collection">
                            <li class="collection-item">Alvin</li>
                            <li class="collection-item">Alvin</li>
                            <li class="collection-item">Alvin</li>
                            <li class="collection-item">Alvin</li>
                        </ul>
                    </div>
                </div>

                <div class="col s9 blue">
                {/* Teal page content */}
                    <div class="container">
                        {/* Page Content goes here */}
                        main
                    </div>
                </div>

                </div>
            </div>
        );
    }
}

export default Gogi;