import React, { Component } from 'react';
const { kakao } = window;
class Map extends Component{
    componentDidMount(){
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="section center">
                    도로명 : 인천 미추홀구 길파로 16-1 <br/>
                    지번 : 인천 미추홀구 주안동 15-45
                    </div>
                    <div className="section center">
                        <div className="center">
                            <div id='myMap' style={{
                            width: "100%", height: "400px"
                            }}></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s7 center">
                            버스
                        </div>
                        <div className="col s5 ">
                            버스 몇번 몇번
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s7 center">
                        지하철 
                        </div>
                        <div className="col s5 ">
                        1호선 인천2호선 주안역6번 출구에서183m
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s7 center">
                            차
                        </div>
                        <div className="col s5 ">
                            고속도로 정도
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Map;
