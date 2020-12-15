import React, { Component } from 'react';
import { post } from 'axios';
class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            file: null,
            title: '',
            explan: '' ,
            part: '',
            fileName: '',
            radioGroup: {
                cow: false,
                pig: true, 
                etc: false
            }
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
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

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleRadioChange = (e) =>{
        let obj = {} 
        obj[e.target.value] = e.target.checked 
        this.setState({radioGroup: obj,
        part: e.target.value})
        console.log(obj);
    }

    addCustomer = () => {
        const url = '/api/test';
        const formData = new FormData();
        formData.append('image',this.state.file);
        formData.append('title',this.state.title);
        formData.append('explan',this.state.explan);
        formData.append('part',this.state.part);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
        // for (let key of formData.keys()) {
        //     console.log("key : " + key);
        // }
        // for (let value of formData.values()) {
        //     console.log("values : "+value);
        // }
        // return post(url, formData, config);
        // return post(url,{ ip: '2' , name: 'name', active: 'active'}, config);
    }

    render(){
        return(
            <div className="container">
              <div className="account-form-wrapper">
              <h3>Join</h3>
              <form onSubmit={this.handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <th>이메일</th>
                      <td><input type='text' name='email' /></td>
                    </tr>
                    <tr>
                      <th>비밀번호</th>
                      <td><input type='password' name='pwd' /></td>
                    </tr>
                    <tr>
                      <th>닉네임</th>
                      <td><input type='text' name='nickname' /></td>
                    </tr>
                    <tr>
                      <th>이름</th>
                      <td><input type='text' name='name' /></td>
                    </tr>
                    <tr>
                      <td colSpan='2'><input type='submit' value='제출'/></td>
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