
import React, { useEffect } from 'react';
const { kakao } = window;

//37.46741738597061, 126.6796137748884
function Map () {
    useEffect(()=>{
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(37.467417, 126.679613),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    });
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
                        28-1, 28
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
                        공단시장을 끼고있습니다. 많이 복잡합니다. 멀리 주차하시고 찾아와 주세요
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
