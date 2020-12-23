
import React, { useEffect, useState } from 'react';
import { TextInput, Button, Icon, Table } from 'react-materialize';
import axios from 'axios';

import { SignStatus } from '../recoil/SignStatus'
import { useRecoilState } from 'recoil';
function Review() {
    const [signStatus, setSignStatus] = useRecoilState(SignStatus);
    const [reviewStatus, setReviewStatus] = useState({status: false});
    const [review,setReview] = useState('');
    const [userText, setUserText] = useState('');

    let gR;
    useEffect(() => {
        console.log("sign state : ", signStatus);
        getReview()
            .then((response) => {
                if (response.data && !review.status) {
                    console.log("res.data :", response.data);
                    gR = response.data;
                    console.log("gR : ",gR);
                    setReview({status : true, data : response.data});
                    console.log("Review : ",review.data);
                    //setReviewStatus(true);
                }
            }).catch((err) => {
                console.log("getInfo error", err);
            })
    });
    const handleFormSubmit = (e) => {
        //e.preventDefault()

        addReview()
            .then((response) => {
                console.log("res1 : ", response.data);
                if (response.data === "OK") {
                    console.log("res2 : ", response.data);
                    setUserText('');    
                }
            }).catch((err) => {
                console.log("Login error", err);
            })
    }

    const onChangeText = (e) => {
        setUserText(e.target.value);
    }


    const addReview = () => {
        const url = '/api/review';

        return axios.post(url, {
            name: signStatus.name,
            text: userText
        });
    }

    const getReview = () => {
        const url = '/api/review';
        return axios.get(url)
    };

    const getContent = () => {
        //console.log("gerwrewreqerwwerrwe");
        //const names = ['눈사람', '얼음', '눈', '바람'];
        const datas = review.data;
        const body = datas.map( d =>
            <tr>
                <td>{d.name}</td>
                <td>{d.text}</td>
            </tr>
        );
        return (
            <tbody>
                {body}
            </tbody>
        )
    }
   
    const getContent_login_from = () => {
        const body = 
                <div>
                    <h5>짧게 리뷰 남겨주세요</h5>
                    <TextInput
                    data-length={75}
                    id="TextInput-4"
                    label="Input text"
                    name="userID" value={userText} onChange={onChangeText}
                    />
                </div>
            ;
        return (
            <form onSubmit={handleFormSubmit}>
                    <h1>매장리뷰</h1>
                    {body}
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                >Submit<Icon right>send</Icon></Button>
            </form>
        );
    }
    const getContent_logout_from = () => {
        const datas = ['ds','aa'];
        const body = 
                <div>
                    <h5>리뷰를 남기려면 로그인해야합니다.</h5>
                </div>
            ;
        return (
            <form onSubmit={handleFormSubmit}>
                    <h1>매장리뷰</h1>
                    {body}
                <TextInput
                    data-length={75}
                    id="TextInput-4"
                    label="Input text"
                    name="userID" value={userText} onChange={onChangeText}
                    disabled
                />
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                >Submit<Icon right>send</Icon></Button>
            </form>
        );
    }
    return (
        <div>
            <div className="container">
                {signStatus.status ? getContent_login_from() : getContent_logout_from()}
                {/* <form onSubmit={handleFormSubmit}>
                    <h1>매장리뷰</h1>
                    <h5>짧게 리뷰를 남겨주세요</h5>
                    <TextInput
                        data-length={75}
                        id="TextInput-4"
                        label="Input text"
                        name="userID" value={userText} onChange={onChangeText}
                    />
                    <Button
                        node="button"
                        type="submit"
                        waves="light"
                    >Submit<Icon right>send</Icon></Button>
                </form> */}
              
                <Table>
                    <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="text">text</th>
                        </tr>
                    </thead>
                        {review.status ? getContent() : ''}
                </Table>
            </div>
        </div>
    );
}





export default Review;
