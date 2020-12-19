
import React, { useEffect, useState } from 'react';
import { TextInput, Button, Icon, Table } from 'react-materialize';
import axios from 'axios';

import { SignStatus } from '../recoil/SignStatus'
import { useRecoilState } from 'recoil';
function Review() {
    const [signStatus, setSignStatus] = useRecoilState(SignStatus);
    const [reviewStatus, setReviewStatus] = useState(false);
    const [review,setReview] = useState('');
    const [userText, setUserText] = useState('');

    let gR;
    useEffect(() => {
        console.log("sign state : ", signStatus);
        getReview()
            .then((response) => {
                if (response.data && !reviewStatus) {
                    console.log("res.data :", response.data);
                    gR = response.data;
                    setReview({data : response.data});
                    setReviewStatus(true);
                }
            }).catch((err) => {
                console.log("getInfo error", err);
            })
    });
    const handleFormSubmit = (e) => {
        e.preventDefault()

        addReview()
            .then((response) => {
                console.log("res : ", response.data);
                if (response.data.result === "OK") {
                    console.log("res : ", response.data);
                    setSignStatus({
                        status: true,
                        name: response.data.userName
                    });
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
        console.log("gerwrewreqerwwerrwe");
        const datas = gR.data;
        const body = gR.data.map( d =>{
            <div>
                <td>Alvin</td>
                <td>Eclair</td>
            </div>
        });
        return (
            <tr>
                {body}
            </tr>
        )
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
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
                </form>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="text">text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}





export default Review;
