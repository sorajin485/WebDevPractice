
import React, { useState } from 'react';
import axios from 'axios';
import { TextInput } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import { SignStatus } from '../recoil/SignStatus'
import { useRecoilState } from 'recoil';
const Login = () =>{
  const [ signStatus,setSignStatus ] = useRecoilState(SignStatus);
  const [ userID, setUserID ]  = useState('');
  const [ userPW, setUserPW ]  = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault()
    loginTry()
        .then((response) =>{
          console.log("res : ",response.data);
            if(response.data.result==="OK"){
              console.log("res : ",response.data);
              setSignStatus({
                status : true,
                name : response.data.userName
              });
              
            }
        }).catch((err) =>{
          console.log("Login error",err);
        })
  }
  const onChangeUserID = (e) =>{
    setUserID(e.target.value);
  }
  const onChangeUserPW = (e) =>{
    setUserPW(e.target.value);
  }
  
  const loginTry = () => {
    const url = '/api/users/signin';
    return axios.post(url,
    {
      "userID" : userID,
      "userPW" : userPW,
    })
  }

  return(
    <div className="container">
      { signStatus ? <Redirect to="/"/> : console.log("signStatus :",signStatus) }
      <div className="account-form-wrapper">
      <h3>Login</h3>
      <form onSubmit={handleFormSubmit}>
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
                name="userID" value ={userID} onChange={onChangeUserID}
                validate
              /></td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td><TextInput
                password
                id="TextInput-4"
                label="Password"
                name="userPW" value ={userPW} onChange={onChangeUserPW}
              /></td>
            </tr>
            <tr>
              <td colSpan='2'><input type='submit' value='로그인'/></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
);
}

export default Login;