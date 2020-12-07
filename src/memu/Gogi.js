
import React, { Component } from 'react';
import {Slider, Slide, Caption, Tabs,Tab, Card, Icon, CardTitle } from 'react-materialize';
import pig1 from '../img/pig1.jpg';
import pig2 from '../img/pig2.jpg';
class Gogi extends Component {
    render(){
        return(
            <div>
<Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 400,
        indicators: true,
        interval: 6000
      }}
    >
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1"/>}>
    <Caption placement="center">
      <h3>
        매장을 방문해보세요!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        신선한 고기가 있습니다.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
    <Caption placement="left">
      <h3>
        매장을 방문해보세요!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        직접 도축하는 과정에서 고기를 때드립니다.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
    <Caption placement="right">
      <h3>
        매장을 방문해보세요!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        신선한 고기가 있습니다.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
    <Caption placement="center">
      <h3>
        매장을 방문해보세요!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        직접 도축하는 과정에서 고기를 때드립니다.
      </h5>
    </Caption>
  </Slide>
</Slider>
<Tabs
  className="tab-demo z-depth-1 tabs-fixed-width"
  
>
  <Tab
    className="red lighten-4"
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="돼지"
  >
    <div className="container">
                    <div className="section">
                    {/*   Icon Section   */}
                        <div className="row ">
                            <div className="col s12 m4">
                            <Card
                              closeIcon={<Icon>close</Icon>}
                              header={<CardTitle image={pig1} reveal waves="light"/>}
                              reveal={<p>기준가 15,300원/600g <br/>두께 선택가능</p>}
                              revealIcon={<Icon>more_vert</Icon>}
                              title="돼지 삼겹살 구이용"
                            >
                            </Card>
                            </div>

                            <div className="col s12 m4">
                            <Card
                              closeIcon={<Icon>close</Icon>}
                              header={<CardTitle image={pig2} reveal waves="light"/>}
                              reveal={<p>기준가 15,300원/600g <br/>두께 선택가능</p>}
                              revealIcon={<Icon>more_vert</Icon>}
                              title="돼지 수육용"
                            >
                            </Card>
                            </div>

                            <div className="col s12 m4">
                            <Card
                              closeIcon={<Icon>close</Icon>}
                              header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
                              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                              revealIcon={<Icon>more_vert</Icon>}
                              title="Card Title"
                            >
                            </Card>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col s12 m4">
                            <Card
                              closeIcon={<Icon>close</Icon>}
                              header={<CardTitle image={pig1} reveal waves="light"/>}
                              reveal={<p>기준가 15,300원/600g <br/>두께 선택가능</p>}
                              revealIcon={<Icon>more_vert</Icon>}
                              title="돼지 삼겹살 구이용"
                            >
                            </Card>
                            </div>

                            <div className="col s12 m4">
                            <Card
                              closeIcon={<Icon>close</Icon>}
                              header={<CardTitle image={pig2} reveal waves="light"/>}
                              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                              revealIcon={<Icon>more_vert</Icon>}
                              title="돼지 수육용"
                            >
                            </Card>
                            </div>

                            <div className="col s12 m4">
                            <Card
                              closeIcon={<Icon>close</Icon>}
                              header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
                              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                              revealIcon={<Icon>more_vert</Icon>}
                              title="Card Title"
                            >
                            </Card>
                            </div>
                        </div>
                    </div>
                </div>
  </Tab>
  <Tab
    className="pink lighten-4"
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="소"
  >
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
  </Tab>
  <Tab
    className="purple lighten-4"
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="그 외"
  >
    Test 3
  </Tab>
</Tabs>
                    
              
            </div>
        );
    }
}

export default Gogi;