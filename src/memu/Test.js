import React, { Component } from 'react';
import { post } from 'axios';
import {TextInput} from 'react-materialize';
class Test extends Component{
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
                <form onSubmit={this.handleFormSubmit}>
                    <h1>고기 추가</h1>
                    {/* <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" name="file" file ={this.state.file} value ={this.state.fileName} onChange={this.handleFileChange}/>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text"/>
                        </div>
                    </div> */}
                    <TextInput
                        id="TextInput-4"
                        label="File"
                        type="file"
                        name="file" file ={this.state.file} value ={this.state.fileName} onChange={this.handleFileChange}
                    />
                    {/*고기 이미지: <input type="file" name="file" file ={this.state.file} value ={this.state.fileName} onChange={this.handleFileChange}/><br/>*/}
                    고기 이름: <input type="text" name="title" value ={this.state.title} onChange={this.handleValueChange}/><br/>
                    고기 설명: <input type="text" name="explan" value ={this.state.explan} onChange={this.handleValueChange}/><br/>
                    
                    <label>
                        <input class="with-gap" name="group" value ="cow" type="radio" checked={this.state.radioGroup['cow']} onChange={this.handleRadioChange} />
                        <span>소&nbsp;&nbsp;</span>
                    </label>
                    <label>
                        <input class="with-gap" name="group" value ="pig" type="radio" checked={this.state.radioGroup['pig']} onChange={this.handleRadioChange}/>
                        <span>돼지&nbsp;&nbsp;</span>
                    </label>
                    <label>
                        <input class="with-gap" name="group"value ="etc" type="radio" checked={this.state.radioGroup['etc']} onChange={this.handleRadioChange}/>
                        <span>기타</span>
                    </label>
                    <br/>
                    <button type="submit">추가하기</button>
                </form>
            </div>
        );
    }
}

export default Test;