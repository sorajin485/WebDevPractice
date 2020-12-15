
import React, { Component } from 'react';
import axios from 'axios';
import {TextInput} from 'react-materialize';
class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            userID: '',
            userPW: '' ,
            userName: '',
            phoneNum: ''
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addUser()
            .then((response) =>{
                console.log(response.data);
            })
        // this.setState({
        //     userEmail: '',
        //     userName: '',
        //     userActive: '' 
        // })
        // window.location.reload();
    }

    handleValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addUser = () => {
        const url = '/api/users/signup';
        return axios.post(url,
        {
          "userID" : this.state.userID,
          "userPW" : this.state.userPW,
          "userName" : this.state.userName,
          "phoneNum" : this.state.phoneNum
        })
        // const formData = new FormData();
        // formData.append('userID',this.state.userID);
        // formData.append('userPW',this.state.userPW);
        // formData.append('userName',this.state.userName);
        // formData.append('phoneNum',this.state.phoneNum);
        // console.log("userID: ",this.state.userID);
        // console.log("userPW: ",this.state.userPW);
        // console.log("userName: ",this.state.userName);
        // console.log("phoneNum: ",this.state.phoneNum);
        
        // for (let key of formData.keys()) {
        //     console.log("key : " + key);
        // }
        // for (let value of formData.values()) {
        //     console.log("values : "+value);
        // }
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        //return post(url, formData);

    }

    render(){
        return(
            <div className="container">
              <div className="account-form-wrapper">
              <h3>Join</h3>
              <form onSubmit={this.handleFormSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <th>아이디</th>
                      <td><TextInput
                        email
                        error="Email 형식을 지켜주세요"
                        id="TextInput-4"
                        label="Email"
                        success="Great"
                        name="userID" value ={this.state.userID} onChange={this.handleValueChange}
                        validate
                      /></td>
                    </tr>
                    <tr>
                      <th>비밀번호</th>
                      <td><TextInput
                        password
                        id="TextInput-4"
                        label="Password"
                        name="userPW" value ={this.state.userPW} onChange={this.handleValueChange}
                      /></td>
                    </tr>
                    <tr>
                      <th>이름</th>
                      <td><TextInput
                        id="TextInput-4"
                        label="First Name"
                        name="userName" value ={this.state.userName} onChange={this.handleValueChange}
                      /></td>
                    </tr>
                    <tr>
                      <th>핸드폰번호</th>
                      <td><TextInput
                        icon="phone"
                        id="TextInput-4"
                        label="phone"
                        name="phoneNum" value ={this.state.phoneNum} onChange={this.handleValueChange}
                      /></td>
                    </tr>
                    <tr>
                      <td colSpan='2'><input type='submit' value='회원가입'/></td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            </div>
        );
    }
}

export default Register;