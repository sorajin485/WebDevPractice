
import React, { Component,useEffect, useState } from 'react';
import { Slider, Slide, Caption, Tabs, Tab, Card, Icon, CardTitle } from 'react-materialize';
import pig1 from '../img/pig1.jpg';
import axios from 'axios';

class Gogi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cow: "",
      pig: "",
      chicken: ""
    }
  }
  componentDidMount() {
    this.getCow()
      .then(res => {
        this.setState({ cow: res });
      })
      .catch(err => console.log(err))
    this.getPig()
      .then(res => {
        this.setState({ pig: res });
      })
      .catch(err => console.log(err))
    this.getChicken()
      .then(res => {
        this.setState({ chicken: res });
      })
      .catch(err => console.log(err))
  }

  getCow = async () => {
    const response = await fetch('/api/cow');
    const body = await response.json();
    return body;
  }
  getPig = async () => {
    const response = await fetch('/api/pig');
    const body = await response.json();
    return body;
  }
  getChicken = async () => {
    const response = await fetch('/api/chicken');
    const body = await response.json();
    return body;
  }
  IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((name, index) => <li key={index}>asd{name}</li>);
    return (
      <div>
        <ul>{nameList}</ul>
      </div>
    );
  };
  getContent_cow = () => {
    const datas = this.state.cow;
    console.log("datas : ", datas);
    const body = datas.data.map(d =>
      <div className="col s12 m4">
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={d.img} reveal waves="light" />}
          reveal={<p>{d.explan}</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title={d.title}
        ></Card>
      </div>
    );
    return (
      <div className="row ">
        {body}
      </div>);
    }
  getContent_pig = () => {
    const datas = this.state.pig;
    console.log("datas : ", datas);
    const body = datas.data.map((d) =>
      <div className="col s12 m4">
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={d.img} reveal waves="light" />}
          reveal={<p>{d.explan}</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title={d.title}
        ></Card>
      </div>
    );
    return (
      <div className="row ">
        {body}
      </div>);
  }
  getContent_chicken = () => {
    const datas = this.state.chicken;
    console.log("datas : ", datas);
    const body = datas.data.map((d) =>
      <div className="col s12 m4">
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={d.img} reveal waves="light" />}
          reveal={<p>{d.explan}</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title={d.title}
        ></Card>
      </div>
    );
    return (
      <div className="row ">
        {body}
      </div>);
  }
  render() {
    return (
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
        <Slide image={<img alt="" src="/image/img/banner/banner_3.jpg" />}>
          <Caption placement="center">
            <h3>매장을 방문해보세요!</h3>
            <h5 className="light grey-text text-lighten-3">
              신선한 고기가 있습니다.</h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src="/image/img/banner/banner_4.jpg" />}>
          <Caption placement="left ">
            <h3 className="black-text">매장을 방문해보세요!</h3>
            <h5 className="light black-text text-lighten-3">
              직접 도축하는 과정에서 고기를 때드립니다.</h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src="/image/img/banner/banner_5.jpg" />}>
          <Caption placement="right">
            <h3>매장을 방문해보세요!</h3>
            <h5 className="light grey-text text-lighten-3">
              신선한 고기가 있습니다.</h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src="/image/img/banner/banner_6.jpg" />}>
          <Caption placement="center">
            <h3>매장을 방문해보세요!</h3>
            <h5 className="light grey-text text-lighten-3">
              직접 도축하는 과정에서 고기를 때드립니다.</h5>
          </Caption>
        </Slide>
      </Slider>
      <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
        <Tab
          className="red lighten-4"
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
              {this.state.cow ? this.getContent_cow() : ''}
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
          title="돼지"
        >
          <div className="container">
            <div className="section">
              {this.state.pig ? this.getContent_pig() : ''}
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
          <div className="container">
            <div className="section">
              {this.state.chicken ? this.getContent_chicken() : ''}
            </div>
          </div>
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default Gogi;